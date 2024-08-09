import express, { Express, Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";

const app: Express = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});

const MONGO_URI =
  "mongodb+srv://monasubedi:monasubedi123@cluster0.p7ktlga.mongodb.net/";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to MONGODB"))
  .catch((e) => console.log("Error in Connecting to MONGODB" + e));

app.listen(PORT, () => console.log(`Server listening on PORT ${PORT}`));
