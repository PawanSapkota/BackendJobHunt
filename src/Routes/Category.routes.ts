import { Router } from "express";
import {
  deleteCustomerHandler,
  getCustomerHandler,
  getSingleCustomerHandler,
  PostustomerHandler,
  updateCustomerHandler,
} from "../controller/Category.controller";
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

router.route("/").get(getCustomerHandler).post(PostustomerHandler);

router
  .route("/:id")
  .get(getSingleCustomerHandler)
  .patch(updateCustomerHandler)
  .delete(deleteCustomerHandler);

export default router;
