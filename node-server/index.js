var http = require("http"),
  fs = require("fs");

var server = http
  .createServer(function (request, response) {
    fs.readFile("./index.html", function (err, html) {
      if (err) {
        throw err;
      }
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  })
  .listen(8080);