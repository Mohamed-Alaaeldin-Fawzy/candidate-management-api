import { CandidateRepository } from "../candidates";
import { Candidate } from "./models/candidate";
import { v4 } from "uuid";

export class InMemoryCandidateRepository extends CandidateRepository {
  private candidates: Map<string, Candidate> = new Map();

  async createOrUpdate(data: Candidate): Promise<Candidate> {
    if (!data.id) {
      data.id = v4();
    }
    const candidate = new Candidate(data);
    this.candidates.set(candidate.email, candidate);
    return candidate;
  }
}
