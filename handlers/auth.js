import{ Router } from "express";
import { createUserValidator } from "../validators/user.js";

const router = Router();
router.post("/", createUserValidator, async (req, res, next) => {
  try {
    const user = await register(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
});
router.post("/login", async (req, res, next) => {
  try {
    const token = await login(req.body);  
    res.json({ token });
  } catch (error) {
    next(error);
  }
});

export default router;