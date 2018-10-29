const Library = require('./library');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send(Library.render(`
# Hello World EMEA Tech!
---
# Thank you
---
# Q&A
`));
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening on port %s', port);
});
