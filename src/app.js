const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h2>Weather</h2>");
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Giedre",
      age: 31,
    },
    {
      name: "Vy",
    },
  ]);
});

app.get("/about", (req, res) => {
  res.send("<h2>About page</h2>");
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
