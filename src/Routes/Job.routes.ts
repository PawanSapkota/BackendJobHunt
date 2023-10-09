import { Router } from "express";
import {
  deleteJobHandler,
  getJobHandler,
  postJobHandler,
} from "../controller/Job.controller";

const router = Router();

router.route("/").post(postJobHandler).get(getJobHandler);

router.route("/:id").delete(deleteJobHandler);
export default router;
