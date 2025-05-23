import express from "express";
import { createUser, getSingleUser } from "../controllers/userController.js";
import { createSubscribing, unsubscribe } from "../controllers/subscribeController.js";
import { createVideo, retrieveSingleId } from "../controllers/videoController.js";

const router = express.Router();

router.post("/api/users", createUser);
router.get("/api/users/:id", getSingleUser);
router.post("/api/users/:userId/subscribe", createSubscribing)
router.post("/api/users/:userId/unsubscribe", unsubscribe);
router.post("/api/videos", createVideo)
router.get("/api/videos/:id", retrieveSingleId)




export default router;