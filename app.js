var express = require('express');
var app = express();
var path = require('path');

const publicDirPath = path.join(__dirname, '.');
app.use(express.static(publicDirPath));

app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});