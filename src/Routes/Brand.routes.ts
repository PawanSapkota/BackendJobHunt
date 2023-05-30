
import {Router} from 'express';
import { getBrandHandler,postBrandHandler,deleteBrand,updateBrandHandler } from '../controller/Brand.controller';
import {upload} from '../Utils/UploadFile'
const router = Router();
// router.use(deserializeUser, requireUser);


/**
 * @swagger
 * components:
 *   schemas:
 *     studentinfoDto:
 *         type: object
 *         properties: 
 *           name:
 *             type: string
 *             description: this is for name of the category
 *           contact_no:
 *             type: string
 *             description: this is for name of the category
 *           address:
 *             type: string
 *             description: this is for name of the category
 *           email:
 *             type: string
 *             description: this is for name of the category
 *           gurdain_name:
 *             type: string
 *             description: this is for name of the category
 *           gurdain_no:
 *             type: string
 *             description: this is for name of the category 
 *           course:
 *             type: string
 *             description: this is for name of the category
 *           status:
 *             type: string
 *             description: this is for name of the category
 *           Stage:
 *             type: string
 *             description: this is for name of the category
 *           Level:
 *             type: string
 *             description: this is for name of the category
 *           Referred:
 *             type: string
 *             description: this is for name of the category
 *           SourceOfInformation:
 *             type: string
 *             description: this is for name of the category
 *           Category_name:
 *             type: string
 *             description: this is for name of the category
 *           schoolName:
 *             type: string
 *             description: this is for name of the category
 *           schoolCourseTaken:
 *             type: string
 *             description: this is for name of the category
 * 
 */

/**
 * @swagger
 * tags:
 *   name: studentinfo Record
 *   description: Record of all user CRUD
 * 
 */

/**
 * @swagger
 * /studentinfo/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [studentinfo Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new studentinfo
 *     tags: [studentinfo Record]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema: 
 *             $ref: '#/components/schemas/studentinfoDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /studentinfo/{id}:
 *  patch:
 *     summary: used to update studentinfos
 *     tags: [studentinfo Record]
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
 *             $ref: '#/components/schemas/studentinfoDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [studentinfo Record]
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
  .post(upload.single('image'), postBrandHandler)
  
  .get(getBrandHandler)
//   .delete(getPostHandler);

router
  .route('/:id')
  .patch(upload.single('image'),updateBrandHandler)
  .delete(deleteBrand)
  export default router;