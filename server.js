const express = require('express');
const app = express();

app.get("/", (request, response) => {
  response.sendFile(__dirname + '/app/index.html');
})

app.listen(3000, () => {
  console.log("Listening on port 3000");
})