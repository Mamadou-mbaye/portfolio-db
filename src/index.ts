import { connect } from "./data-source";
import * as express from "express";
import { Application } from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app: Application = express();
const port: number = parseInt(process.env.SERVER_PORT) || 3001;

app.use(express.json());
app.use("/", (req, res) => {});
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connect();
});
