import { Router } from "express";
import {
  deleteBenefit,
  getSingleBenefitHandler,
  getBenefitHandler,
  postBenefitHandler,
  updateBenefitHandler,
} from "../controller/Benefit.controller";
import { Auth } from "../Utils/ValidateRoutes";
const router = Router();
// router.use(deserializeUser, requireUser);

/**
 * @swagger
 * components:
 *   schemas:
 *     BenefitDto:
 *         name: object
 *         properties:
 *           name:
 *             name: string
 *             description: this is for name of the benefit
 */

/**
 * @swagger
 * tags:
 *   name: Benefit Record
 *   description: Record of all benefit CRUD
 *
 */

/**
 * @swagger
 * /benefit/:
 *  get:
 *     summary: Use to request all benefit Record
 *     tags: [Benefit Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new studentinfo
 *     tags: [Benefit Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/BenefitDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 *
 * /benefit/{id}:
 *  patch:
 *     summary: used to update studentinfos
 *     tags: [Benefit Record]
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
 *             $ref: '#/components/schemas/BenefitDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all Benefit Record
 *     tags: [Benefit Record]
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
 *     summary: Use to request all Benefit Record
 *     tags: [Benefit Record]
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

router.route("/").post(Auth, postBenefitHandler).get(getBenefitHandler);

router
  .route("/:id")
  .get(getSingleBenefitHandler)
  .patch(Auth, updateBenefitHandler)
  .delete(Auth, deleteBenefit);

export default router;
