import { Router } from "express";
import {
  logout,
  postHandler,
  postHandlerLogin,
  verifyToken,
} from "../controller/Auth.controller";
import { Auth } from "../Utils/ValidateRoutes";
const router = Router();

router.route("/").post(postHandler);
router.route("/login").post(postHandlerLogin);
router.route("/verifytoken").get(Auth, verifyToken);
router.route("/logout").get(Auth, logout);

export default router;
