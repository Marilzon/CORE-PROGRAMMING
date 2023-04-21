const http = require("node:http");

const server = http.createServer((request, response) => {
  let category = request.url;

  switch (category) {
    case "":
      response.end("Home");
      break;
    case "/media":
      response.end("Media");
      break;
    case "/about":
      response.end("About");

    default:
      response.end("Home");
      break;
  }
});

server.listen(3000);
