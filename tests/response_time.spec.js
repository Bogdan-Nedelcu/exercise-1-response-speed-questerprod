const request = require("supertest");
const app = require("../server/app");

describe("The http server responds fast to user requests regarding the load", () => {
  it("Responds to the user in less than 500 ms", function (done) {
    request(app)
      .get("/?n=40")
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        const resposeTime = parseFloat(res.headers["x-response-time"]);
        expect(resposeTime).toBeLessThan(200);
        return done();
      });
  });
  it("scheldues the task for later execution", function (done) {
    request(app)
      .get("/?n=1")
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        expect(res.body).toEqual({ status: "task-started" });
        return done();
      });
  });
});
