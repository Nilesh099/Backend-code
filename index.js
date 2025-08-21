const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: "1A",
    username: "nilesh",
    content: "Keep Coding",
  },
  {
    id: "1B",
    username: "Ganesh",
    content: "Keep Coding",
  },
  {
    id: "1C",
    username: "Deep",
    content: "Coding",
  },
  {
    id: "1D",
    username: "Shivam",
    content: "new code Coding",
  },
  {
    id: "1E",
    username: "manav",
    content: "Tester",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  console.log(id);
  res.render("show.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
