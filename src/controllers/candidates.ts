import { Request, Response } from "express";
import { CandidateService } from "../services/candidates";
import { asyncErrorHandler } from "../utils/asyncErrorHandler";
import { SQLCandidateRepository } from "../repositories/SQL/candidates";
import { InMemoryCandidateRepository } from "../repositories/inMemory/candidates";

class CandidateController {
  // in the future if we want to switch to another DB only this line will change as long as it's sql DB if it's noSql we will need to change DBConnection also
  private candidateService = new CandidateService(new SQLCandidateRepository());

  createOrUpdateCandidate = asyncErrorHandler(
    async (req: Request, res: Response) => {
      const candidate = await this.candidateService.createOrUpdateCandidate(
        req.body
      );
      res.status(200).json(candidate);
    }
  );
}

export const candidateController = new CandidateController();
