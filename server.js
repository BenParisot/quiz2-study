const http = require('http');
const { parse } = require('url');

http.createServer((request, response) => {
  console.log('request incoming');
  const url = parse(request.url);
  console.log(url);

  switch(url.pathname) {
    case '/birthday':
      response.setHeader('Content-Type', 'text/plain');
      response.end('Happy birthday sweetheart');
      break;

    case '/hello':
      response.setHeader('Content-Type', 'application/json');
      response.end(JSON.stringify({ 'name': 'Tooter', 'occupation': 'tooter' }));
      break;

    default:
      response.statusCode = 404;
      response.end('404 Not found');
      break;
  }
})
  .listen(8888);

//create server using http.createServer

//on request, console.log something
//on request set content type in header

//use conditional logic to create different paths and have different responses based on the path requests

//need to use req.url to get url and then parse that variable
//get pathname using .pathname on parsed url

