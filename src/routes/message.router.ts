import { Router } from "express";
import {
  registerMessageController,
  sendMessage,
} from "../controllers/message.controller";
const router = Router();
router.post("/message/register", registerMessageController);
router.get("/", sendMessage);
export { router };
