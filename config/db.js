import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // loads .env variables

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // avoids certificate issues
      },
    },
  }
);

export default sequelize;
