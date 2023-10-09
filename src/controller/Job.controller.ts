import { NextFunction, Request, Response } from "express";
import AppError from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import { Job } from "../entity/Job";
import { Technology } from "../entity/Technology";
import { In } from "typeorm";
import { Category } from "../entity/Category";
import { Benefit } from "../entity/Benefit";
import { Location } from "../entity/Location";
import { Skills } from "../entity/Skills";
import { JobType } from "../entity/JobType";
import { client } from "../reddis/redis";

const JobRepo = AppDataSource.getRepository(Job);

const TechnologyRepo = AppDataSource.getRepository(Technology);
const CategoryRepo = AppDataSource.getRepository(Category);
const BenefitRepo = AppDataSource.getRepository(Benefit);
const LocationRepo = AppDataSource.getRepository(Location);
const SkillRepo = AppDataSource.getRepository(Skills);
const JobTypeRepo = AppDataSource.getRepository(JobType);

// console.log(JobRepo, CategoryRepo);

export const postJobHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    let techdata = await TechnologyRepo.find({
      where: {
        id: In(req.body.technologies),
      },
    });

    let categorydata = await CategoryRepo.find({
      where: {
        id: In(req.body.categories),
      },
    });

    let locationData = await LocationRepo.find({
      where: {
        id: In(req.body.locations),
      },
    });
    let benefitData = await BenefitRepo.find({
      where: {
        id: In(req.body.benefits),
      },
    });
    let skillsData = await SkillRepo.find({
      where: {
        id: In(req.body.skills),
      },
    });
    let JobTypData = await JobTypeRepo.find({
      where: {
        id: In(req.body.jobtype),
      },
    });
    req.body.technologies = techdata;
    req.body.categories = categorydata;
    req.body.locations = locationData;
    req.body.benefits = benefitData;
    req.body.jobtype = JobTypData;
    req.body.skills = skillsData;

    // await client.set("foo", "bar");
    await JobRepo.save(req.body).then((result) => {
      res.status(200).json({
        message: "Job has been Added",
        result,
      });
    });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const getJobHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("dsds");
    // let data = await client.set("foo", "bar");
    // console.log(data, "dsd");

    await JobRepo.find({
      relations: {
        jobtypes: true,
        categories: true,
        locations: true,
        benefits: true,
        skills: true,
        technologies: true,
      },
    })
      .then((result: any) => {
        res.status(200).json({
          message: "Get all Job",
          result,
        });
      })
      .catch((err) => next(new AppError(err.statusCode, err.message)));
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};

export const deleteJobHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let job = await JobRepo.findOneBy({ id: req.params.id });
    if (!job) {
      next(new AppError(404, "Job with this is not found"));
    }
    // await client.set("foor", "bar");

    await JobRepo.remove(job).then((result) => {
      res.status(200).json({
        message: "Location has been Deleted.",
        result,
      });
    });
  } catch (error) {
    next(new AppError(error.statusCode, error.message));
  }
};
