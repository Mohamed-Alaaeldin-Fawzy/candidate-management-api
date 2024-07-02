import { Candidate } from "../models/candidate";

export abstract class CandidateRepository {
  abstract createOrUpdate(data: Candidate): Promise<any>;
}
