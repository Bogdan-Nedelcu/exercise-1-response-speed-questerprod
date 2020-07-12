const request = require("supertest");
const app = require("../server/app");

describe("Expesive task schelduer", () => {
  it("Scheldues task correctly after a request", function (done) {
    request(app)
      .get("/?n=5")
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        const resposeTime = parseFloat(res.headers["x-response-time"]);
        expect(resposeTime).toBeLessThan(1000);
        return done();
      });

    request(app)
      .get("/?n=10")
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        const resposeTime = parseFloat(res.headers["x-response-time"]);
        expect(resposeTime).toBeLessThan(1000);
        return done();
      });

    request(app)
      .get("/tasksPending")
      .set("Accept", "application/json")
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        const resposeTime = parseFloat(res.headers["x-response-time"]);
        expect(res.body).toEqual({
          tasks: 2,
        });
        return done();
      });
  });
});
