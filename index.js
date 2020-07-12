const app = require("./server/app");
const request = require("supertest");

app.listen(3000, () => console.log("Running on port 3000 ..."));
