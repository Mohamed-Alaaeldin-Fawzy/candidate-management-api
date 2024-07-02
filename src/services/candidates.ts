import { CandidateRepository } from "../repositories/candidates";
import { Candidate } from "../models/candidate";

export class CandidateService {
  constructor(private candidateRepository: CandidateRepository) {}

  async createOrUpdateCandidate(data: Candidate): Promise<Candidate> {
    const candidateData = await this.candidateRepository.createOrUpdate(data);
    return candidateData;
  }
}
