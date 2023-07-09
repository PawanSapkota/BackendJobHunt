
import {Router} from 'express';
import { getBrandHandler,postBrandHandler,deleteBrand,updateBrandHandler, getSingleBrandHandler } from '../controller/Brand.controller';
import {upload} from '../Utils/UploadFile'
const router = Router();
// router.use(deserializeUser, requireUser);


/**
 * @swagger
 * components:
 *   schemas:
 *     jobInfoDto:
 *         type: object
 *         properties: 
 *           title:
 *             type: string
 *             description: this is for name of the category
 *           subtitle:
 *             type: string
 *             description: this is for name of the category
 *           company_name:
 *             type: string
 *             description: this is for name of the category
 *           salaryRange:
 *             type: string
 *             description: this is for name of the category
 *           description:
 *             type: string
 *             description: this is for name of the category
 *           deadline:
 *             type: string
 *             description: this is for name of the category 
 *           jobtype:
 *             type: array
 *             description: this is for name of the category
 *           category:
 *             type: array
 *             description: this is for name of the category
 *           skils:
 *             type: string
 *             description: this is for name of the category
 *           benefits:
 *             type: array
 *             description: this is for name of the category
 *           location:
 *             type: string
 *             description: this is for name of the category
 *           image:
 *             type: file
 *             description: this is for name of the category
 * 
 */

/**
 * @swagger
 * tags:
 *   name: JobInfo Record
 *   description: Record of all user CRUD
 * 
 */

/**
 * @swagger
 * /jobInfo/:
 *  get:
 *     summary: Use to request all user Record
 *     tags: [JobInfo Record]
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  post:
 *     summary: used to add new studentinfo
 *     tags: [JobInfo Record]
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema: 
 *             $ref: '#/components/schemas/jobInfoDto'
 *     responses:
 *         '200':
 *           description: A sucessfull response
 * 
 * /jobInfo/{id}:
 *  patch:
 *     summary: used to update studentinfos
 *     tags: [JobInfo Record]
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
 *             $ref: '#/components/schemas/jobInfoDto'
 *     responses:
 *        '200':
 *          description: A sucessfull response
 *  delete:
 *     summary: Use to request all user Record
 *     tags: [JobInfo Record]
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
 *     summary: Use to request all user Record
 *     tags: [JobInfo Record]
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
//   .delete(getPostHancleadler);

router
  .route('/:id')
  .get(getSingleBrandHandler)
  .patch(upload.single('image'),updateBrandHandler)
  .delete(deleteBrand)

  
  export default router;