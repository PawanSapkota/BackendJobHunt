import { Router } from "express";
import { companyPostHandler } from "../controller/Company.controller";
const router = Router();

router.route("/").post(companyPostHandler);

export default router;
