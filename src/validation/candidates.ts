import Joi from "joi";

export const candidateSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().optional(),
  callTime: Joi.string().optional(),
  linkedInUrl: Joi.string().uri().optional(),
  githubUrl: Joi.string().uri().optional(),
  comments: Joi.string().required(),
});
