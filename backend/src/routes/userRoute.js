import express from "express";
import { createUser, getSingleUser } from "../controllers/userController.js";
import { createSubscribing } from "../controllers/subscribeController.js";

const router = express.Router();

router.post("/api/user", createUser);
router.get("/api/user/:id", getSingleUser);
router.post("/api/users/:userId/subscribe", createSubscribing)

export default router;