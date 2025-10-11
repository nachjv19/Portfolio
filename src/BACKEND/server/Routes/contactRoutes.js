import express from "express";
import { sendContactMail } from "../controllers/ContactController.js";


const router = express.Router();

router.post("/", sendContactMail);

export default router;