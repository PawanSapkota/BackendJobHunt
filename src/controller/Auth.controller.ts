import { AppDataSource } from "../data-source";
import { NextFunction, Request, Response } from "express";
import * as passwordgen from "generate-password";
import { Auth } from "../entity/Auth";
import * as jsonwebtoken from "jsonwebtoken";
import * as bycrpt from "bcryptjs";
import AppError from "../Utils/AppError";
import htmlTemplate from "../View/mail-template";
import sendMail from "../Utils/Mail";
import { client } from "../reddis/redis";
const AuthRepo = AppDataSource.getRepository(Auth);

interface RequestCustom extends Request {
  User: any;
}

export const postHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // const { email } = req.body;

    const existingUser = await AuthRepo.findOneBy({ email: req.body.email });

    if (existingUser) {
      return next(new AppError(400, "Email has been already used."));
    }

    let password = passwordgen.generate({
      length: 10,
      numbers: true,
      uppercase: true,
      lowercase: true,
      symbols: true,
    });
    await bycrpt.hash(password, 10).then((hashedpassword) => {
      req.body.password = hashedpassword;
      AuthRepo.save(req.body).then((result) => {
        const message = `Your password is ${password},email is ${req.body.email},and Company Code is ${req.body.company_code}`;
        const options = {
          from: "PAWAN <sapkotapawan33@gmail.com>",
          to: "sapkotapawan33@gmail.com",
          subject: "Testing",
          text: message,
          html: htmlTemplate(message),
        };
        sendMail(options, (info) => {
          console.log("Email has been sent");
          return console.log("messageID", info.messageId);
        });

        res.status(200).json({
          message: "Success",
          result,
        });
      });
    });
  } catch (err) {
    console.log(err);
    next(new AppError(500, "Something went Wrong"));
  }
};

export const postHandlerLogin = async (
  req: RequestCustom,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    let user = await AuthRepo.findOneBy({
      email: req.body.email,
    });

    if (!user) {
      console.log("Error");
      return next(new AppError(404, "User Not Found"));
    }
    console.log(user.role);

    await bycrpt.compare(
      req.body.password,
      user.password,
      function (err, data) {
        console.log(err, data);
        if (err) {
          return next(new AppError(500, "Something went Wrong"));
        }
        if (data) {
          const token = jsonwebtoken.sign(
            {
              id: user.id,
              email: user.email,
              company_code: user.company_code,
              role: user.role,
            },
            "pawan",
            {
              expiresIn: "30d",
            }
          );

          res.cookie("token", token, {
            // httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 * 7,
            // secure: true,
            // signed: false,
          });
          res.status(200).json({
            status: "success",
            data,
            token: token,
          });

          client.set(user.id, token, "EX", 1000);
        }
      }
    );
  } catch (err) {
    next(new AppError(500, "Something went Wrong"));
    console.log(err);
  }
};

export const verifyToken = async (
  req: RequestCustom,
  res: Response,
  next: NextFunction
) => {
  try {
    const cashedData = await client.get(req.User.id);
    console.log(cashedData);

    if (cashedData) {
      res.status(200).json({
        message: "succes",
      });
    } else {
      next(new AppError(401, "Token is not valid"));
    }
  } catch (err) {
    next(new AppError(500, "Something went Wrong"));
    console.log(err);
  }
};

export const logout = async (
  req: RequestCustom,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = req.User.id;
    console.log(userId);
    res.clearCookie("token");
    client.del(userId, (err: any) => {
      if (err) {
        console.log(err);
      } else {
        console.log("redis is deleted");
      }
    });

    res.status(200).json({
      message: "succes",
    });
  } catch (err) {
    next(new AppError(err.statusCode, err.message));
  }
};
