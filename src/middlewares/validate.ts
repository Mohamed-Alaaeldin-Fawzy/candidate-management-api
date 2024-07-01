import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { BadRequestError } from "../errors/badRequestError";

export const validate = (schema: Joi.ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(new BadRequestError(error.details[0].message));
    } else {
      next();
    }
  };
};
