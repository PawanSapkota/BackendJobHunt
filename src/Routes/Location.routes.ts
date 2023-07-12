import { Router } from "express";
import {
  deleteTechnology,
  getSingleTechnologyHandler,
  getTechnologyHandler,
  postTechnologyHandler,
  updateTechnologyHandler,
} from "../controller/Location.controller";
import { Auth } from "../Utils/ValidateRoutes";
const router = Router();
// router.use(deserializeUser, requireUser);

/**
 * @swagger
 * components:
 *   schemas:
 *     LocationDto:
 *         name: object
 *         properties:
 *           name:
 *             name: string
 *             description: this is for name of the location
 */

/**
 * @swagger
 * tags:
 *   name: Location Record
 *   description: Record of all location CRUD
 *
 */

/**
 * @swagger
 * /location/:
 *  get:
 *     summary: Use to request all location Record
 *     tags: [Location Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new studentinfo
 *     tags: [Location Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LocationDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 *
 * /location/{id}:
 *  patch:
 *     summary: used to update studentinfos
 *     tags: [Location Record]
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
 *             $ref: '#/components/schemas/LocationDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all Location Record
 *     tags: [Location Record]
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
 *     summary: Use to request all Location Record
 *     tags: [Location Record]
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
  .get(getSingleTechnologyHandler)
  .patch(updateTechnologyHandler)
  .delete(deleteTechnology);

export default router;
