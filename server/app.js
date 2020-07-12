const express = require("express");
const responseTime = require("response-time");
const expensiveTask = require("./utils/expensiveTask");

const app = express();

app.use(responseTime());

app.get("/", function (req, res) {
  const n = parseInt(req.query.n);
  // heavy server work here
  const result = expensiveTask(n);
  res.status(200).json({ result });
});

module.exports = app;
