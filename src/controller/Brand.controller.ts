import { AppDataSource } from '../data-source'
import { NextFunction, Request, Response } from "express"
import {JobInfo } from "../entity/Brand"
import AppError from '../Utils/AppError';
import {Skills} from '../entity/Skills'
const BrandRepo = AppDataSource.getRepository(JobInfo);
const CategoryRepo = AppDataSource.getRepository(Skills);

export const getBrandHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {

    let Brand= await BrandRepo.find({
        order:{
            createdAt:'ASC'
        }
    });
    console.log(Brand)
      res.status(200).json({
        status: 'success',
       
        Brand
        
      });
    } catch (err: any) {
      next(err);
    }
  };


  export const getSingleBrandHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {

    let Brand= await BrandRepo.findOneBy({
     id:  req.params.id
    
    });
    console.log(Brand)
      res.status(200).json({
        status: 'success',
        Brand
        
      });
    } catch (err: any) {
      next(err);
    }
  };


  export const postBrandHandler=async(
    req:Request,
    res:Response,
    next:NextFunction
  )=>{
    try {
        console.log(req.body,req.file);
        // /let category= new Category();
// category.Category_name=req.body.Category_name;
// req.body.student_category=category;
     req.body.image=req.file.filename
        await BrandRepo.save(req.body).then(result=>{
            res.status(200).json({
                message: "job has been added",
                result
            })
        }).catch(err=>{
            console.log(err,"here")
            res.status(500).json({
                message: "Error creating placement",
                err,
            });
        })
      
    } catch (error) {
        if (error.code === '23505') {
            return res.status(409).json({
                status: 'fail',
                msg: error.message,
                message: 'Brand with that name already exist',
            });
        }
        next(error);
    }
  }

  export const updateBrandHandler=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        console.log(req.body,req.file);
        let Brand=await BrandRepo.findOneBy({id:req.params.id});
        if(!Brand){
            return next(new AppError(404,"Brand with this id not found" ));
        }


console.log(req.body)
        Object.assign(Brand,req.body);
        await BrandRepo.save(Brand).then(result=>{
            console.log(result)
            res.status(200).json({
                message: "working",
                result
            })
        }).catch(err=>{
            res.status(500).json({
                message: "Error creating placement",
                err,
            });
        })
    } catch (error) {
        if (error.code === '23505') {
            return res.status(409).json({
                status: 'fail',
                msg: error.message,
                message: 'Brand with that name already exist',
            });
        }
    }
  }

  export const deleteBrand=async(
    req:Request,res:Response,next:NextFunction
  )=>{
    try {
        let Brand=await BrandRepo.findOneBy({id:req.params.id});
        if(!Brand){
            return next(new AppError(404,"Brand with this id not found"))
        }
        await BrandRepo.remove(Brand).then((result:any)=>{
            console.log(result);
            res.status(200).json({
                message:'Brand has beed deleted successfully',
                result
            })
        }).catch((err:any)=>{
            console.log(err)
            next (new AppError(err.statusCode,err.message))
        })
    } catch (error:any) {
        next(new AppError(error.statusCode, error.message))
    }
  }