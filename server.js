const express = require("express");
let port = process.env.PORT;

if (port == null || port == "") {
  port = 8000;
}

const hbs = require('hbs');
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.send("Tung Anh");
});
app.get('/help', (req, res) => {

});
app.listen(port, () => {
  console.log("Port is openning"+port);
});

