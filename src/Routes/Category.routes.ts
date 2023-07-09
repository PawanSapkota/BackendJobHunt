import {Router} from 'express'
import {getCategory,postCategoryHandler,deleteCategoryHandler,patchCategoryHandler} from '../controller/Category.controller';
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
 *     skilsDto:
 *         type: object
 *         properties: 
 *           title:
 *             type: string
 *             description: this is for name of the skils
 *           type:
 *             type: string
 *             description: this is for type like technical or other 
 */

/**
 * @swagger
 * tags:
 *   name:  Skils Record
 *   description: Record of all skils CRUD
 * 
 */

/**
 * @swagger
 * /skils/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [Skils Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new skils
 *     tags: [Skils Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/skilsDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /skils/{id}:
 *  patch:
 *     summary: used to update skilss
 *     tags: [Skils Record]
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
 *             $ref: '#/components/schemas/skilsDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [Skils Record]
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
.get(getCategory)
.post(postCategoryHandler);


router.route('/:id')
.patch(patchCategoryHandler)
.delete(deleteCategoryHandler);



export default router;
