import express from "express";
import { asyncErrorHandler } from "../utils/asyncErrorHandler";
import { Response, Request } from "express";

const router = express.Router();

export const invalidRouter = () => {
  router.get(
    "*",
    asyncErrorHandler(async (_req: Request, res: Response) => {
      res
        .status(404)
        .send("Invalid route please only send requests to known routes");
    })
  );
  return router;
};
