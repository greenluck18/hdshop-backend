import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const {
    DB_USERNAME,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    DB_PORT
} = process.env;

// const sequelize = new Sequelize(`postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`);


const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // This will help you connect to the PostgreSQL database with SSL
      rejectUnauthorized: false // You can adjust this based on your needs
    },
    connectTimeout: 30000 // Optional: set a connection timeout (in ms)
  },
  logging: false, // Optional: disable logging; default is console.log
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

export { sequelize }