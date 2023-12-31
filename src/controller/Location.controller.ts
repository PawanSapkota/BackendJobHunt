import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import AppError from "../Utils/AppError";
import { Location } from "../entity/Location";
const LocationRepo = AppDataSource.getRepository(Location);

export const getLocationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let Locations = await LocationRepo.find({
      order: {
        createdAt: "ASC",
      },
    });
    console.log(Locations);
    res.status(200).json({
      status: "success",
      Locations,
    });
  } catch (err: any) {
    next(err);
  }
};

export const getSingleLocationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let technologies = await LocationRepo.findOneBy({
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

export const postLocationHandler = async (
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
    await LocationRepo.save(req.body)
      .then((result) => {
        res.status(200).json({
          message: "Location has been added",
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
        message: "Location with that name already exist",
      });
    }
    next(error);
  }
};

export const updateLocationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body, req.file);
    let technologies = await LocationRepo.findOneBy({ id: req.params.id });
    if (!technologies) {
      return next(new AppError(404, "Location with this id not found"));
    }

    console.log(req.body);
    Object.assign(technologies, req.body);
    await LocationRepo.save(technologies)
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
        message: "Location with that name already exist",
      });
    }
  }
};

export const deleteLocation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let technologies = await LocationRepo.findOneBy({ id: req.params.id });
    if (!technologies) {
      return next(new AppError(404, "Location with this id not found"));
    }
    await LocationRepo.remove(technologies)
      .then((result: any) => {
        console.log(result);
        res.status(200).json({
          message: "Location has beed deleted successfully",
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
