import CandidateModel from "./models/candidate";
import { CandidateRepository } from "../candidates";
import { Candidate } from "../../models/candidate";

export class SQLCandidateRepository extends CandidateRepository {
  async createOrUpdate(data: Candidate): Promise<CandidateModel> {
    const [candidate] = await CandidateModel.upsert(data);
    return candidate;
  }
}
