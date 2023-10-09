import * as jwt from 'jsonwebtoken';
import { Request,Response,NextFunction } from 'express';

export interface RequestCustom extends Request
{
    User: any;
}
export const Auth =async(
    req: RequestCustom,res:Response,next: NextFunction
)=>{
    try {
      console.log(req.headers.cookie);
      let tokens = req.headers.cookie.toString().split("=")[1];
      console.log(tokens, "jhjhx");
      const decodedToken = await jwt.verify(tokens, "pawan");
      const user = await decodedToken;
      console.log(user);
      req.User = user;
      next();
    } catch (error) {
      res.status(401).json({
        error: new Error("Invalid request!"),
      });
    }  
};
