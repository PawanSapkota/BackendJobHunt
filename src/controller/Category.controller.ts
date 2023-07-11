import AppError from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import { Category } from "../entity/Category";
import { Response, Request, NextFunction } from "express";

const CategoryRepo = AppDataSource.getRepository(Category);

export const getCategoryHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await CategoryRepo.find()
      .then((categories) => {
        res.status(200).json({
          message: "category has been fetched",
          categories,
        });
      })
      .catch((err) => {
        next(new AppError(500, err.message));
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const getSingleCategoryHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await CategoryRepo.findOneBy({ id: req.params.id })
      .then((categories) => {
        res.status(200).json({
          message: "category has been fetched",
          categories,
        });
      })
      .catch((err) => {
        next(new AppError(500, err.message));
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};
export const PostustomerHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await CategoryRepo.save(req.body)
      .then((categories) => {
        res.status(200).json({
          message: "category has been updated",
          categories,
        });
      })
      .catch((err) => {
        next(new AppError(500, err.message));
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const updateCategoryHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let Category = await CategoryRepo.findOneBy({ id: req.params.id });
    if (!Category) {
      return next(new AppError(404, "category with this id not found"));
    }
    Object.assign(Category, req.body);
    await CategoryRepo.save(Category)
      .then((categories) => {
        res.status(200).json({
          message: "category has been updated",
          categories,
        });
      })
      .catch((err) => {
        next(new AppError(500, err.message));
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const deleteCategoryHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let Category = await CategoryRepo.findOneBy({ id: req.params.id });
    if (!Category) {
      return next(new AppError(404, "category with this id not found"));
    }
    await CategoryRepo.remove(Category)
      .then((categories) => {
        res.status(200).json({
          message: "Category has been deleted",
          categories,
        });
      })
      .catch((err) => {
        next(new AppError(500, err.message));
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};
