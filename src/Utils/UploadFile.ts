import * as multer  from 'multer';
import {Request, Router} from 'express';

const storage = multer.diskStorage({
    destination: function(req:Request, file:Express.Multer.File, cb) {
        cb(null, `src/Public`);
    },
    filename: function (req:Request, file:Express.Multer.File, cb) {
      console.log(file.originalname);
      let newName = file.originalname.split(".");
      let date = new Date().toDateString();
      let name = Date.parse(date) + "." + newName[1];
      cb(null, name);

      // cb(null ,file.originalname );
    }
});

export const upload = multer({ storage: storage });