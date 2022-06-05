const express = require("express");


const app = express();
const port = 3000;


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


let items = ["Buy food", "Cook food", "Eat Food"];
let workItems = [];


app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    listTitle: day,
    newListItems: items
  });
});


app.post("/", (req, res) => {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});


app.get("/work", (req, res) => {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  });
});


app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});


app.get("/about", (req, res) => {
  res.render("about");
});


app.listen(port, () => {
  console.log(`Todolist-v1 is listening on port ${port}`);
});
