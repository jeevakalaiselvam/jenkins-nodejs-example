const request = require("supertest");
const app = require("../index");

describe("GET /test", () => {
  it("should return a test message", async () => {
    const response = await request(app).get("/test");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "This is a test endpoint" });
  });
});
