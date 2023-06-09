import {Router} from 'express'
import {getBrandHandler,deleteBrand,postBrandHandler,updateBrandHandler} from '../controller/otaku.controller';
import {Auth} from '../Utils/ValidateRoutes'
const router = Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BasicAuth: 
 *       type: http
 *       scheme: bearer
 *   schemas:
 *     OtakuDto:
 *         type: object
 *         properties: 
 *           name:
 *             type: string
 *             description: this is for name of the category
 *           email:
 *             type: string
 *             description: this is for name of the category
 *           address:
 *             type: string
 *             description: this is for name of the category
 *           contact:
 *             type: string
 *             description: this is for name of the category
 */

/**
 * @swagger
 * tags:
 *   name: OtakuvOTERS Record
 *   description: Record of all category CRUD
 * 
 */

/**
 * @swagger
 * /otakuvoters/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [OtakuvOTERS Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new Category
 *     tags: [OtakuvOTERS Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/OtakuDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /otakuvoters/{id}:
 *  patch:
 *     summary: used to update Categorys
 *     tags: [OtakuvOTERS Record]
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
 *             $ref: '#/components/schemas/OtakuDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [OtakuvOTERS Record]
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
.route('/')
.get(getBrandHandler)
.post(postBrandHandler);


router.route('/:id')
.patch(updateBrandHandler)
.delete(deleteBrand);



export default router;
