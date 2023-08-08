const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();
app.get("/", (request, response) => {
  const todayDate = new Date();
  const result = addDays(
    new Date(
      todayDate.getFullYear(),
      todayDate.getMonth(),
      todayDate.getDate()
    ),
    100
  );

  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

app.listen(3000);
module.exports = app;
