import { NextFunction, Request, Response } from "express";

interface RequestCustom extends Request {
  User: any;
}

export const RoleValidate = async (
  req: RequestCustom,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.User);
    if (req.User.role === "admin") {
      next();
    } else {
      res.status(401).json({
        message: "Invalid Request",
      });
    }
  } catch (err) {
    console.log(err);
  }
};
