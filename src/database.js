import mysql from "mysql2";
import { database } from "./config.js";

export const createPool = mysql.createPool(database);

export const pool = await createPool.getConnection();
