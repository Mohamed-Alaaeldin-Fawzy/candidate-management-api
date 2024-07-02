import Joi from "joi";

export const candidateSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().allow("").optional(),
  callTime: Joi.number().allow(null).optional(),
  linkedInUrl: Joi.string().uri().allow("").optional(),
  githubUrl: Joi.string().uri().allow("").optional(),
  comments: Joi.string().required(),
});
