import request from "supertest";
import express from "express";
import { candidate } from "../src/routes/candidate";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use("/candidate", candidate());

describe("CandidateController", () => {
  it("should create or update a candidate", async () => {
    const response = await request(app).post("/candidate").send({
      firstName: "Mohamed",
      lastName: "Alaaeldin",
      email: "Mohamed@example.com",
      phoneNumber: "123-456-7890",
      callTime: new Date().getTime(),
      linkedInUrl: "https://www.linkedin.com/in/mo",
      githubUrl: "https://github.com/mo",
      comments: "Experienced software engineer.",
    });

    expect(response.status).toBe(200);
    expect(response.body.email).toBe("Mohamed@example.com");
  });
});
