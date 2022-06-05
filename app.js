const express = require("express");


const app = express();
const port = 3000;


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


let items = ["Buy food", "Cook food", "Eat Food"];


app.get("/", (req, res) => {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {
    kindOfDay: day,
    newListItems: items
  });
});


app.post("/", (req, res) => {
  let item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});


app.listen(port, () => {
  console.log(`Todolist-v1 is listening on port ${port}`);
});


// let currentDay = today.getDay();
// let day = "";

// switch(currentDay) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }