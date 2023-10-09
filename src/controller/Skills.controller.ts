import { NextFunction, Request, Response } from "express";
import AppError from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import { Skills } from "../entity/Skills";
export interface RequestCustom extends Request {
  User: any;
}
const SkillsRepo = AppDataSource.getRepository(Skills);
export const getSkill = async (
  req: RequestCustom,
  res: Response,
  next: NextFunction
) => {
  try {
    await SkillsRepo.find()
      .then((skills: object) => {
        res.status(200).json({
          message: "skill has been added",
          skills,
        });
      })
      .catch((err) => {
        next(new AppError(err.statusCode, err.message));
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const postSkillHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  try {
    await SkillsRepo.save(req.body)
      .then((skills: object) => {
        res.status(200).json({
          message: "skill has been added",
          skills,
        });
      })
      .catch((err) => {
        next(new AppError(err.statusCode, err.message));
      });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const patchSkillHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let Skills = await SkillsRepo.findOneBy({ id: req.params.id });
    if (!Skills) {
      return next(new AppError(404, "cateory with this di doesn't exist"));
    }
    Object.assign(Skills, req.body);
    await SkillsRepo.save(Skills)
      .then((skills: object) => {
        res.status(200).json({
          message: "skill has been updated",
          skills,
        });
      })
      .catch((err: any) => {
        next(new AppError(err.statusCode, err.message));
      });
  } catch (error: any) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const deleteSkillHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let Skills = await SkillsRepo.findOneBy({ id: req.params.id });
    if (!Skills) {
      return next(new AppError(404, "skill with this di doesn't exist"));
    }
    await SkillsRepo.remove(Skills)
      .then((skills: object) => {
        res.status(200).json({
          message: "skill has been updated",
          skills,
        });
      })
      .catch((err: any) => {
        next(new AppError(err.statusCode, err.message));
      });
  } catch (error: any) {
    next(new AppError(error.statusCode, error.message));
  }
};
