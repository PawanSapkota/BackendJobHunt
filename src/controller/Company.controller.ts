import { NextFunction, Request, Response, response } from "express";
import { AppDataSource } from "../data-source";
import { Company } from "../entity/Company";
import { Location } from "../entity/Location";
import { Category } from "../entity/Category";
import { Benefit } from "../entity/Benefit";
import { Technology } from "../entity/Technology";
import * as passwordgen from "generate-password";
import AppError from "../Utils/AppError";
import { In } from "typeorm";

const CompanyRepo = AppDataSource.getRepository(Company);
const LocationRepo = AppDataSource.getRepository(Location);
const CategoryRepo = AppDataSource.getRepository(Category);
const BenefitRepo = AppDataSource.getRepository(Benefit);
const TechnologyRepo = AppDataSource.getRepository(Technology);

export interface RequestCustom extends Request {
  User: any;
  file: any;
}

export const companyPostHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);

    let company_code = passwordgen.generate({
      length: 6,
      numbers: true,
      uppercase: true,
      lowercase: true,
      symbols: false,
    });

    let tech = await TechnologyRepo.find({
      where: {
        id: In([...JSON.parse(req.body.technologies)]),
      },
    });

    let category = await CategoryRepo.find({
      where: {
        id: In([...JSON.parse(req.body.categories)]),
      },
    });
    let benefit = await BenefitRepo.find({
      where: {
        id: In([...JSON.parse(req.body.benefits)]),
      },
    });
    let location = await LocationRepo.find({
      where: {
        id: In([...JSON.parse(req.body.locations)]),
      },
    });

    req.body.company_code = company_code;
    req.body.benefits = benefit;
    req.body.locations = location;
    req.body.categories = category;
    req.body.technologies = tech;
    console.log(req.body);

    if (req.file) {
      req.body.image = req.file.filename;
    }

    console.log(req.body);

    await CompanyRepo.save(req.body).then((result: any) => {
      res.status(200).json({
        message: "Company Has been Added",
        result,
      });
    });
  } catch (err) {
    next(new AppError(err.statusCode, err.message));
  }
};
export const companygetHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let companies = await CompanyRepo.find({
      relations: {
        technologies: true,
      },
    });
    console.log(companies);
    res.status(200).json({
      status: "success",
      companies,
    });
  } catch (err) {
    next(new AppError(err.statusCode, err.message));
  }
};
