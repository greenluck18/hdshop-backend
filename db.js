
import { readFile } from 'fs/promises';
import { Sequelize } from "sequelize";

const config = JSON.parse(await readFile('./config/config.json', 'utf8'));

const {
    username,
    password,
    database,
    host,
    port
} = config.db;

const sequelize = new Sequelize(`postgres://${username}:${password}@${host}:${port}/${database}`);

export { sequelize }