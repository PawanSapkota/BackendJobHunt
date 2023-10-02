import { Router } from "express";
import {
  deleteJobType,
  getJobTypeHandler,
  getSingleJobTypeHandler,
  postJobTypeHandler,
  updateJobTypeHandler,
} from "../controller/JobType.controller";
import { Auth } from "../Utils/ValidateRoutes";
import { RoleValidate } from "../Utils/RoleValidate";

const router = Router();
// router.use(deserializeUser, requireUser);

/**
 * @swagger
 * components:
 *   schemas:
 *     JobTypeDto:
 *         type: object
 *         properties:
 *           type:
 *             type: string
 *             description: this is for name of the category
 */

/**
 * @swagger
 * tags:
 *   name: JobType Record
 *   description: Record of all user CRUD
 *
 */

/**
 * @swagger
 * /jobtype/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [JobType Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new studentinfo
 *     tags: [JobType Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JobTypeDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 *
 * /jobtype/{id}:
 *  patch:
 *     summary: used to update studentinfos
 *     tags: [JobType Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: this if or params with name id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/JobTypeDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all JobType Record
 *     tags: [JobType Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: this is for id
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  get:
 *     summary: Use to request all JobType Record
 *     tags: [JobType Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: this is for id
 *     responses:
 *        '200':
 *          description: A sucessfull response
 */

router
  .route("/")
  .post(Auth, RoleValidate, postJobTypeHandler)
  .get(Auth, RoleValidate, getJobTypeHandler);
//   .delete(getPostHancleadler);

router
  .route("/:id")
  .get(Auth, getSingleJobTypeHandler)
  .patch(Auth, updateJobTypeHandler)
  .delete(Auth, deleteJobType);

export default router;
