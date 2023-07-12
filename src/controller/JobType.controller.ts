import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import AppError from "../Utils/AppError";
import { JobType } from "../entity/JobType";
const JobTypeRepo = AppDataSource.getRepository(JobType);

export const getJobTypeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let jobtypes = await JobTypeRepo.find({
      order: {
        createdAt: "ASC",
      },
    });
    console.log(jobtypes);
    res.status(200).json({
      status: "success",

      jobtypes,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getSingleJobTypeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let jobtypes = await JobTypeRepo.findOneBy({
      id: req.params.id,
    });
    console.log(jobtypes);
    res.status(200).json({
      status: "success",
      jobtypes,
    });
  } catch (err: any) {
    next(err);
  }
};

export const postJobTypeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body, req.file);
    // /let category= new Category();
    // category.Category_name=req.body.Category_name;
    // req.body.student_category=category;
    // req.body.image = req.file.filename;
    await JobTypeRepo.save(req.body)
      .then((jobtypes) => {
        res.status(200).json({
          message: "JobType has been added",
          jobtypes,
        });
      })
      .catch((err) => {
        console.log(err, "here");
        res.status(500).json({
          message: "Error creating placement",
          err,
        });
      });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        status: "fail",
        msg: error.message,
        message: "JobType with that name already exist",
      });
    }
    next(error);
  }
};

export const updateJobTypeHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body, req.file);
    let jobtypes = await JobTypeRepo.findOneBy({ id: req.params.id });
    if (!jobtypes) {
      return next(new AppError(404, "JobType with this id not found"));
    }

    console.log(req.body);
    Object.assign(JobType, req.body);
    await JobTypeRepo.save(jobtypes)
      .then((jobtypes) => {
        console.log(jobtypes);
        res.status(200).json({
          message: "working",
          jobtypes,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Error creating placement",
          err,
        });
      });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        status: "fail",
        msg: error.message,
        message: "JobType with that name already exist",
      });
    }
  }
};

export const deleteJobType = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let jobtypes = await JobTypeRepo.findOneBy({ id: req.params.id });
    if (!jobtypes) {
      return next(new AppError(404, "JobType with this id not found"));
    }
    await JobTypeRepo.remove(jobtypes)
      .then((result: any) => {
        console.log(result);
        res.status(200).json({
          message: "JobType has beed deleted successfully",
          result,
        });
      })
      .catch((err: any) => {
        console.log(err);
        next(new AppError(err.statusCode, err.message));
      });
  } catch (error: any) {
    next(new AppError(error.statusCode, error.message));
  }
};
