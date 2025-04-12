let http = require('http');
let urlManager = require('url');

http.createServer(
  function(request, response){
    let parsedUrl = urlManager.parse(request.url, true);

    let path = parsedUrl.pathname;
    let params = parsedUrl.query;

    let x = Number (params.x);
    let y = Number (params.y);
    let result = "";

    switch (path) {
      case "/dodaj": {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        result = x+y;
        break;
      }
      case "/odejmij": {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        result = x-y;
        break;
      }
      case "/pomnoz": {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        result = x*y;
        break;
      }
      case "/podziel": {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        if(y==0) result="nie wolno dzielic przez 0"
        else result = x/y;
        break;
      }
      default:{
        response.writeHead(404);
        break;}
    }
    response.write(result.toString());
    response.end();
  }
).listen(8080);