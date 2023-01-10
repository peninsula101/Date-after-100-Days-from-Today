const addDays = require("date-fns/addDays");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  /*const result = addDays(new Date(2023, 0, 10), 100);
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );*/

  let date = new Date();
  /*response.send(
    `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  );*/
  const result = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

app.listen(3000);

module.exports = app;
