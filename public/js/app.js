console.log("Client side javascript is loaded!");

const weatherForm = document.querySelector("form");
const searchEl = document.querySelector("input");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = searchEl.value;
  const url = `http://localhost:3000/weather?address=${location}`;

  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data.location);
        console.log(data.forecast);
      }
    });
  });
});
