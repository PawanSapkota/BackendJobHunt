import { Router } from "express";
import {
  deleteTechnology,
  getSingleTechnologyHandler,
  getTechnologyHandler,
  postTechnologyHandler,
  updateTechnologyHandler,
} from "../controller/Technology.controller";
import { Auth } from "../Utils/ValidateRoutes";

const router = Router();
// router.use(deserializeUser, requireUser);

/**
 * @swagger
 * components:
 *   schemas:
 *     TechnologyDto:
 *         name: object
 *         properties:
 *           name:
 *             name: string
 *             description: this is for name of the category
 */

/**
 * @swagger
 * tags:
 *   name: Technology Record
 *   description: Record of all user CRUD
 *
 */

/**
 * @swagger
 * /technology/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [Technology Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new studentinfo
 *     tags: [Technology Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TechnologyDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 *
 * /technology/{id}:
 *  patch:
 *     summary: used to update studentinfos
 *     tags: [Technology Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           name: string
 *         required: true
 *         description: this if or params with name id
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TechnologyDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all Technology Record
 *     tags: [Technology Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           name: string
 *         required: true
 *         description: this is for id
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  get:
 *     summary: Use to request all Technology Record
 *     tags: [Technology Record]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           name: string
 *         required: true
 *         description: this is for id
 *     responses:
 *        '200':
 *          description: A sucessfull response
 */

router.route("/").post(postTechnologyHandler).get(getTechnologyHandler);
//   .delete(getPostHancleadler);

router
  .route("/:id")
  .get(Auth, getSingleTechnologyHandler)
  .patch(Auth, updateTechnologyHandler)
  .delete(Auth, deleteTechnology);

export default router;
