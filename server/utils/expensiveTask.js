const fibo = require("./fibo");

function expensiveTaskList(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(fibo(i));
  }
  return result;
}

module.exports = expensiveTaskList;
