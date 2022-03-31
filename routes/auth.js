import express from "express";
import { validate } from "../middlewares/validate.js";
import { signup, login } from "../controllers/auth.js";
const router = express.Router();

router.post('/signup',validate, signup);
router.post('/login',validate, login);
// router.post('register', register);
export default router