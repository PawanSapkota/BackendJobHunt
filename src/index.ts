import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "./data-source";
import * as swaggerJsDoc from "swagger-jsdoc";
import * as swaggerUiExpress from "swagger-ui-express";
import { port } from "./config";
import AppError from "./Utils/AppError";
import * as cors from "cors";
import * as morgan from "morgan";
// routes import
import BrandRoute from "./Routes/Brand.routes";
// import OtakuRoute from './Routes/OtakuVoters.routes';

import CategoryRoute from "./Routes/Category.routes";
// import PaymentRoute from './Routes/Payment.routes';

// import ProductRoute from './Routes/Product.routes';
// import ServicesRoute from './Routes/Service.routes';
// import BookingRoute from './Routes/Booking.routes';
import LocationRoute from "./Routes/Location.routes";
import BenefitRoute from "./Routes/Benefit.routes";
import AuthRoute from "./Routes/Auth.routes";
import JobRoute from "./Routes/Job.routes";

import SkillRoute from "./Routes/Skills.routes";
import JobTypeRoute from "./Routes/JobType.routes";
import TechnologyRoute from "./Routes/Technology.routes";
import CompanyRoute from "./Routes/Company.routes";

// import StaffRoute from './Routes/Staff.routes';
// import HTML_TEMPLATE from './View/mail-template';
// import SENDMAIL from './Utils/Mail';

AppDataSource.initialize()
  .then(async () => {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
    app.use("/public", express.static("src/Public"));
    app.use(morgan("dev"));

    // swagger setup
    const swaggerOptions = {
      definition: {
        openapi: "3.0.0",
        info: {
          title: "JobHunt Backend documentation",
          version: "15",
          description: "Main website",
          contact: {
            name: "kisan mahat",
          },
          servers: [4002],
        },
      },
      // apis:["./routes/*.{ts}","./Routes/*.{ts}","./**/*.{ts}","build/routes/*.js","build/**/*.js","build/Routes/*.js",]
      apis: [
        "./routes/*.ts",
        "./Routes/*.ts",
        "./**/*.ts",
        "index.ts",
        `${__dirname}/routes/*.routes.ts`,
        `${__dirname}/Routes/*.routes.ts`,
      ],
    };
    const swaggerDocs = swaggerJsDoc(swaggerOptions);
    app.use(
      "/doc",
      swaggerUiExpress.serve,
      swaggerUiExpress.setup(swaggerDocs)
    );

    // routes here
    app.get("/", (req: Request, res: Response) => {
      res.status(200).json({
        message: "working",
      });
    });

    app.use("/jobInfo", BrandRoute);
    app.use("/skills", SkillRoute);
    app.use("/category", CategoryRoute);
    app.use("/jobtype", JobTypeRoute);
    app.use("/technology", TechnologyRoute);
    app.use("/location", LocationRoute);
    app.use("/benefit", BenefitRoute);
    app.use("/auth", AuthRoute);
    app.use("/company", CompanyRoute);
    app.use("/job", JobRoute);

    // app.use('/payment',PaymentRoute);
    // app.use('/product',ProductRoute);
    // app.use('/service',ServicesRoute);
    // app.use('/booking',BookingRoute);
    // app.use('/auth',UsersRoute);
    // app.use('/staff',StaffRoute);

    // unhandled routes
    app.all("*", (req: Request, res: Response, next: NextFunction) => {
      next(new AppError(404, `Route ${req.originalUrl} not found`));
    });

    // GLOBAL ERROR HANDLER
    app.use(
      (error: AppError, req: Request, res: Response, next: NextFunction) => {
        error.status = error.status || "error";
        error.statusCode = error.statusCode || 500;

        res.status(error.statusCode).json({
          status: error.status,
          message: error.message,
        });
      }
    );

    // start express server
    app.listen(port, () =>
      console.log("Express server has started on port: " + port)
    );
    console.log("port", port);
  })
  .catch((error) => console.log(error));
