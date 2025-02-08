import dotenv from "dotenv";
import { Pool } from "pg";

// Load environment variables from a .env file
dotenv.config();

const connectionString = `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`;

// Create the pool
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: fasle,
  },
});

// Test the database
const testDbconnection = async () => {
  try {
    console.log(connectionString);
    const res = await pool.query("SELECT 1");
    console.log("Database connected successfully:", res.rows);
  } catch {
    console.error("Error connecting to the database:", err.stack);
    process.exit(1);
  }
};

testDbconnection();

// Assuming pool is defined elsewhere in your code

export const query = (text, params) => pool.query(text, params);
export const end = () => pool.end();
