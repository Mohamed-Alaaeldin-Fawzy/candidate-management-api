import { validate } from "../src/middlewares/validate";
import { candidateSchema } from "../src/validation/candidates";
import express from "express";
import request from "supertest";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.post("/candidate", validate(candidateSchema), (req, res) => {
  res.status(200).send(req.body);
});

describe("Validation Middleware", () => {
  it("should validate request body successfully", async () => {
    const response = await request(app).post("/candidate").send({
      firstName: "Mohamed",
      lastName: "Alaaeldin",
      email: "Mohamed@example.com",
      comments: "Experienced software engineer.",
    });

    expect(response.status).toBe(200);
  });

  it("should return validation error for invalid request body", async () => {
    const response = await request(app).post("/candidate").send({
      firstName: "Mohamed",
      lastName: "Alaaeldin",
    });

    expect(response.status).toBe(400);
  });
});
