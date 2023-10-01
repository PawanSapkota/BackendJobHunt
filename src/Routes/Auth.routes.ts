import { Router } from "express";
import { postHandler, postHandlerLogin } from "../controller/Auth.controller";
const router = Router();

router.route("/").post(postHandler);
router.route("/login").post(postHandlerLogin);

export default router;
