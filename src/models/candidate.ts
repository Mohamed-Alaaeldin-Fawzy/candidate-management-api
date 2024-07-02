export class Candidate {
  public firstName: string;
  public lastName: string;
  public email: string;
  public phoneNumber?: string;
  public callTime?: string;
  public linkedInUrl?: string;
  public githubUrl?: string;
  public comments: string;

  constructor({
    firstName,
    lastName,
    email,
    phoneNumber,
    callTime,
    linkedInUrl,
    githubUrl,
    comments,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
    callTime?: string;
    linkedInUrl?: string;
    githubUrl?: string;
    comments: string;
  }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.callTime = callTime;
    this.linkedInUrl = linkedInUrl;
    this.githubUrl = githubUrl;
    this.comments = comments;
  }
}
