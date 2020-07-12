// A dummy task queue
const taskQueue = [];

// add a task to the queue
function addTask(task, args) {
  taskQueue.push({
    task,
    args,
  });
}

// run the first task found in the queue
function runTask() {
  if (taskQueue.length > 0) {
    const task = taskQueue.pop();
    task.task(task.args);
    console.info("Task with difficulty " + task.args + " is now finished");
    console.log("Tasks pending: " + taskQueue.length);
    return true;
  }
  return false;
}

function startWorker() {
  if (process.env.NODE_ENV != "test") {
    setInterval(runTask, 500);
  }
}

function tasksEndpoint(app) {
  app.get("/tasksPending", function (req, res) {
    // res.status(200).json({ result });
    res.json({ tasks: taskQueue.length });
  });
}

module.exports = {
  addTask,
  runTask,
  startWorker,
  tasksEndpoint,
};
