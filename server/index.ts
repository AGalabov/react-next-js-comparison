import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

const todos = ["TODO 1", "TODO 2", "TODO 3"];

let numberOfGetRequests = 0;

app.use(cors());

app.get("/unsafe", (req, res) => {
  const curr = ++numberOfGetRequests;

  console.log(curr);

  setTimeout(() => {
    if (curr % 10 === 0) {
      res.status(500).send({ error: "You are unlucky" });
      return;
    }
    res.json({ todos, reqNum: curr });
  }, 3000);
});

app.get("/:id", (req, res) => {
  console.log("Will return here", req.params.id);
  const id = Number(req.params.id as string);
  const todo = todos[id];

  setTimeout(() => {
    res.json({ id, todo, description: `Description for ${todo}` });
  }, 3000);
});

app.get("/", (req, res) => {
  const curr = ++numberOfGetRequests;
  console.log(curr);

  setTimeout(() => {
    res.json({ todos, reqNum: curr });
  }, 3000);
});

app.post("/add", (req, res) => {
  todos.push(`TODO ${todos.length + 1}`);

  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
