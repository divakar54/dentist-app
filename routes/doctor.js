import express from "express";
import { getDoctors } from "../controllers/doctor.js";
const router = express.Router()

router.get('/', getDoctors);

export default router;
