import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import AppError from "../Utils/AppError";
import { Technology } from "../entity/Technology";
const TechnologyRepo = AppDataSource.getRepository(Technology);

export const getTechnologyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let technologies = await TechnologyRepo.find({
      order: {
        createdAt: "ASC",
      },
    });
    console.log(technologies);
    res.status(200).json({
      status: "success",

      technologies,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getSingleTechnologyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let technologies = await TechnologyRepo.findOneBy({
      id: req.params.id,
    });
    console.log(technologies);
    res.status(200).json({
      status: "success",
      technologies,
    });
  } catch (err: any) {
    next(err);
  }
};

export const postTechnologyHandler = async (
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
    await TechnologyRepo.save(req.body)
      .then((result) => {
        res.status(200).json({
          message: "Technology has been added",
          result,
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
        message: "Technology with that name already exist",
      });
    }
    next(error);
  }
};

export const updateTechnologyHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body, req.file);
    let technologies = await TechnologyRepo.findOneBy({ id: req.params.id });
    if (!technologies) {
      return next(new AppError(404, "Technology with this id not found"));
    }

    console.log(req.body);
    Object.assign(technologies, req.body);
    await TechnologyRepo.save(technologies)
      .then((result) => {
        console.log(result);
        res.status(200).json({
          message: "working",
          result,
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
        message: "Technology with that name already exist",
      });
    }
  }
};

export const deleteTechnology = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let technologies = await TechnologyRepo.findOneBy({ id: req.params.id });
    if (!technologies) {
      return next(new AppError(404, "Technology with this id not found"));
    }
    await TechnologyRepo.remove(technologies)
      .then((result: any) => {
        console.log(result);
        res.status(200).json({
          message: "Technology has beed deleted successfully",
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
