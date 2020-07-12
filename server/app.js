const express = require("express");
const responseTime = require("response-time");
const expensiveTask = require("./utils/expensiveTask");

const { addTask, startWorker, tasksEndpoint } = require("./utils/taskRunner");
const e = require("express");

const app = express();
tasksEndpoint(app);
startWorker();
app.use(responseTime());

app.get("/", function (req, res) {
  const n = parseInt(req.query.n);
  // heavy server work here
  // const result = expensiveTask(n);
  addTask(expensiveTask, n)
  res.status(200).json({ status: "task-started" });
});

module.exports = app;
