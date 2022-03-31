import express from "express";
import { getCondition } from "../controllers/patient.js";
const router = express.Router()

router.post('/', getCondition);

export default router;
