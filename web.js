var express = require('express');
var app = express();
var inFile = "index.html";
app.use(express.logger());

app.get('/', function(request, response) {
  var fileContent = fs.readFileSync(inFile ); 
  response.send(fileContent);
  //response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


