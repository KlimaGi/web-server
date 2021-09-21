const path = require("path");
const express = require("express");

const app = express();
const publicDirPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Gi",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About me",
    name: "Gi",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forecast: "Cloudy",
    location: "vilnius",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000.");
});
