import {Router} from 'express'
import {getCategory,postCategoryHandler,deleteCategoryHandler,patchCategoryHandler} from '../controller/Skills.controller';
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
 *     skillsDto:
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
 *   name:  Skills Record
 *   description: Record of all skils CRUD
 * 
 */

/**
 * @swagger
 * /skills/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [Skills Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new skils
 *     tags: [Skills Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/skillsDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /skills/{id}:
 *  patch:
 *     summary: used to update skilss
 *     tags: [Skills Record]
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
 *             $ref: '#/components/schemas/skillsDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [Skills Record]
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
