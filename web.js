var express = require('express');
var app = express();
var inFile = "index.html";
var fs = require('fs');
app.use(express.logger());

app.get('/', function(request, response) {
  var fileContent = fs.readFileSync(inFile ); 
  response.send(fileContent.toString());
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});




