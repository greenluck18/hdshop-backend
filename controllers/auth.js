// create and get the Item
import { Users } from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import crypto from "crypto";

/**
 * Items
 */
// create application/json parser

class AuthController {
  /**
   * ping - pong
   * @param {Request} req
   * @param {Response} res
   */
  constructor() {
    this.privateKey = null;
  }

  async generatePrivateKey() {
    const buf = crypto.randomBytes(64);
    this.privateKey = buf.toString("hex");
  }
  async createUser(req, res) {
    try {
      const { login, password, first_name, last_name, email } = req.body;
      const existingItem = await Users.findOne({
        where: { login: login?.trim() },
      });

      if (existingItem) {
        res.status(404).json({ error: "Error user already exist" });
        return;
      } else {
        try {
          const salt = await bcrypt.genSalt(10);
          const user = await Users.create({
            login,
            password: bcrypt.hashSync(password, salt),
            first_name,
            last_name,
            email,
          });
          res.status(201).json({ userId: user.dataValues.id });
        } catch (error) {
          res.status(505);
          res.json(err);
        }
      }
    } catch (err) {
      res.status(500);
      res.json(err);
    }
  }
  async login(req, res) {
    try {
      const { login, password } = req.body;
      const user = await Users.findOne({ where: { login: login } });

      if (user?.dataValues) {
        const isMatch = await bcrypt.compare(
          password,
          user.dataValues.password
        );

        if (isMatch) {
          if (!this.privateKey) {
            // Generate private key for the first user
            console.log("GENERATE_PR_KEY");
            await this.generatePrivateKey();
          }
          const accessToken = jwt.sign(
            {
              id: user.dataValues.id,
              email: user.dataValues.email,
              first_name: user.dataValues.first_name,
              expiresAt: new Date().getTime() + 24 * 60 * 60 * 1000,
            },
            this.privateKey
          );

          console.log(accessToken);
          res
            .status(200)
            .json({ token: accessToken, userId: user.dataValues.id });
        } else {
          res.status(404).json({ error: "Error unauthorized" });
        }
      } else {
        res.status(404).json({ error: "Error unauthorized" });
      }
    } catch (err) {
      res.status(500);
      console.log(res);
      res.json(err);
    }
  }

  async authenticateToken(req, res, next) {
    const token = req.header("Authorization");
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - Missing Token. Login first" });
    }

    jwt.verify(token, this.privateKey, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Forbidden - Invalid Token" });
      }
      req.user = user;
      if (new Date().getTime() > user.expiresAt) {
        return res.status(403).json({ message: "Forbidden - Token Expired" });
      }
      next();
    });
  }
  async allUsers(req, res) {
    try {
      const users = await Users.findAll({
        attributes: ["login", "email"],
      });
      res.status(200).json(users);
    } catch (err) {
      res.status(500);
      res.json(err);
    }
  }
}

export { AuthController };
