import express from "express";
import { candidateController } from "../controllers/candidates";
import { validate } from "../middlewares/validate";
import { candidateSchema } from "../validation/candidates";
const router = express.Router();

export const candidate = () => {
  router.post(
    "/",
    validate(candidateSchema),
    candidateController.createOrUpdateCandidate
  );
  return router;
};
