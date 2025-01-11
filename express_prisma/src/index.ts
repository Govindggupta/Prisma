import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js"

dotenv.config({
  path: "./.env",
});

const prisma = new PrismaClient();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/auth", authRoutes)

app.listen(port, async () => {
  console.log(`Server is running at ${port}...`);
  try {
    await prisma.$connect();
    console.log(`DB connected...`);
  } catch (error) {
    console.log("Error connecting:", error);
    process.exit(1);
  }
});
