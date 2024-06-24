import { connect } from "./data-source";
import * as express from "express";
import { Application } from "express";
import * as dotenv from "dotenv";
dotenv.config();
import * as cors from "cors";
import { router } from "./routes/message.router";
const app: Application = express();
const port: number = parseInt(process.env.SERVER_PORT);

const corsOptions = {
  origin: "https://modu-portfolio.netlify.app",//"http://localhost:3000",  Allow only this origin
  methods: ["POST"], // Allow only POST method
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);
app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await connect();
});
