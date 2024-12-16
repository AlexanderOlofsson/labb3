import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pkg from "pg";
import productRoutes from "./routes/productRoutes.ts";

dotenv.config();

const { Pool } = pkg;

const app = express();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(cors());
app.use(express.json());

// products routes
app.use("/products", productRoutes(pool));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
