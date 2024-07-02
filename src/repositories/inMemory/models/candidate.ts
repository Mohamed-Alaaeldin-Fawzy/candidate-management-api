import { Candidate as baseCandidate } from "../../../models/candidate";

export class Candidate extends baseCandidate {
  public id: string;
  constructor({
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    callTime,
    linkedInUrl,
    githubUrl,
    comments,
  }: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    callTime?: string;
    linkedInUrl?: string;
    githubUrl?: string;
    comments: string;
  }) {
    super({
      firstName,
      lastName,
      email,
      phoneNumber,
      callTime,
      linkedInUrl,
      githubUrl,
      comments,
    });
    this.id = id;
  }
}
