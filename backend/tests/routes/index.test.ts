const request = require("supertest");
const express = require("express");
import app from "../../routes/index";

describe("URL route", () => {
  it("sends a 200 if the URL is valid", async () => {
    const url = "https://google.com/";
    await request(app)
      .post("/")
      .send({ url })
      .expect(200)
      .then((response: Response) =>
        expect(response.text).toBe(`The submitted URL is: ${url}`)
      );
  });

  it("sends a 500 error", async () => {
    const url = "aksjaksj";
    await request(app)
      .post("/")
      .send({ url })
      .then((response: Response) => {
        expect(response.status).toEqual(500);
        expect(response.text).toBe(`Not a valid URL.`);
      });
  });
});
