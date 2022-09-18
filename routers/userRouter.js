import express from "express";
import { userController } from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/refresh_token", userController.refreshToken);
router.get("/logout", userController.logout);
router.get("/getuser", auth, userController.getUser);

export default router;
