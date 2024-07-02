import { CandidateService } from "../src/services/candidates";
import { InMemoryCandidateRepository } from "../src/repositories/inMemory/candidates";

describe("CandidateService", () => {
  let candidateService: CandidateService;
  let candidateRepository: InMemoryCandidateRepository;

  beforeEach(() => {
    candidateRepository = new InMemoryCandidateRepository();
    candidateService = new CandidateService(candidateRepository);
    candidateService["candidateRepository"] = candidateRepository;
  });

  it("should create or update a candidate", async () => {
    const candidateData = {
      firstName: "Mohamed",
      lastName: "Alaaeldin",
      email: "Mohamed@example.com",
      comments: "Test comment",
    };

    const candidate = await candidateService.createOrUpdateCandidate(
      candidateData
    );
    expect(candidate.email).toBe("Mohamed@example.com");
    expect(candidate.firstName).toBe("Mohamed");
    expect(candidate.lastName).toBe("Alaaeldin");
    expect(candidate.comments).toBe("Test comment");
  });
});
