import { Router } from "express";
import {
  deleteCategoryHandler,
  getCategoryHandler,
  getSingleCategoryHandler,
  PostustomerHandler,
  updateCategoryHandler,
} from "../controller/Category.controller";
import { Auth } from "../Utils/ValidateRoutes";
import { RoleValidate } from "../Utils/RoleValidate";
const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     categoryDto:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *             description: this is for name of the category
 *
 */

/**
 * @swagger
 * tags:
 *   name: category Record
 *   description: Record of all  CRUD
 *
 */

/**
 * @swagger
 * /category/:
 *  get:
 *     summary: Use to request all category Record
 *     tags: [category Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to update category
 *     tags: [category Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/categoryDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 * /category/{id}:
 *  patch:
 *     summary: used to update category
 *     tags: [category Record]
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
 *             $ref: '#/components/schemas/categoryDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all category Record
 *     tags: [category Record]
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
  .get(Auth, RoleValidate, getCategoryHandler)
  .post(Auth, PostustomerHandler);

router
  .route("/:id")
  .get(getSingleCategoryHandler)
  .patch(Auth, RoleValidate, updateCategoryHandler)
  .delete(Auth, RoleValidate, deleteCategoryHandler);

export default router;
