import { BaseError } from "./baseError";

export class DatabaseError extends BaseError {
  constructor(error: any) {
    console.error(error);
    super(`internal server error`, 500);
  }
}
