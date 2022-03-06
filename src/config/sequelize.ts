import { Sequelize } from "sequelize";
require("dotenv/config");

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbPass = process.env.DB_PASS as string;

const connection = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: "mysql",
  define: {
    timestamps: true,
  },
});

export default connection;
