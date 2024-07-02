import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { createServer } from "http";
import { invalidRouter } from "./routes/invalid";
import { errorHandler } from "./middlewares/errorHandler";
import sequelize from "./DBConnection/SQLDB";
import { candidate } from "./routes/candidate";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const server = createServer(app);

app.use(cors());

app.use(compression());

app.use(bodyParser.json());

app.use(cookieParser());

app.use("/candidate", candidate());

app.use("/", invalidRouter());

app.use(errorHandler);

const startServer = async (): Promise<void> => {
  try {
    await sequelize.sync();
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start the server:", error);
  }
};

startServer();
