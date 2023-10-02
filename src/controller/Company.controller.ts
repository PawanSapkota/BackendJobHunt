import { NextFunction, Request, Response, response } from "express";
import { AppDataSource } from "../data-source";
import { Company } from "../entity/Company";

export const CompanyRepo = AppDataSource.getRepository(Company);

export interface RequestCustom extends Request {
  User: any;
}

export const companyPostHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const companyname = await CompanyRepo.save({
      company_name: req.body.company_code,
    });
    console.log(companyname);
    await CompanyRepo.save(req.body).then((company) => {
      res.status(200).json({
        message: "Company Has been Added",
      });
    });
  } catch (err) {
    console.log(err);
  }
};
