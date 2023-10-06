import { Router } from "express";
import { companyPostHandler } from "../controller/Company.controller";
import { upload } from "../Utils/UploadFile";
const router = Router();

router.route("/").post(upload.single("image"), companyPostHandler);

export default router;
