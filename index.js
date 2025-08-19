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
    username: "nilesh",
    content: "Keep Coding",
  },
  {
    username: "Shivam",
    content: "new code Coding",
  },
  {
    username: "manav",
    content: "Tester",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
