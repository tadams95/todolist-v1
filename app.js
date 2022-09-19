const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const date = require(__dirname + "/date.js");

console.log(date());

let items = ["The Complete 2022 Web Development Bootcamp", "Complete React Native in 2022: Zero to Mastery (with Hooks)",
"Three.js and TypeScript", "Ethereum Blockchain Developer Bootcamp with Solidity",
"Ethereum and Solidity: The Complete Developer's Guide", "100 Days of Code: The Complete Python Programming Bootcamp for 2022",
"TensorFlow Developer Certificate in 2022: Zero to Mastery"];

let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));

// tells express to serve up this "public folder" as a static resource. so css styling and any images on a server based site/app
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function(req, res){

    let day = date();

      //render a file called list in the views folder, pass file a variable called kindOfDay, which equals day
      res.render("list", {listTitle: day, newListItems: items});
});

//grab hold of user input, saved to item.
app.post("/", function (req, res) {

    let item = req.body.skillInput;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/Work");
    } else {
        // pushed saved item onto array
    items.push(item);

    console.log(item);
    //redirects to res.render above and adds new item to list
    res.redirect("/");
    }

});

app.get("/work", function (req, res) {
    res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work", function (req, res) {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
