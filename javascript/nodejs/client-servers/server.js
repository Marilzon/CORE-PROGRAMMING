import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const hostname = "localhost";
const port = 3333;

const server = http.createServer((req, res) => {
  const { url, method } = req;
  const views = path.resolve("src", "views");
  let currentPath = "";

  console.log(url, method);

  // set header content type
  res.setHeader("Content-Type", "text/html");

  switch (req.url) {
    case "/":
      currentPath = path.join(views, "index.html");
      res.statusCode = 200;
      break;
    case "/home":
      res.statusCode = 301;
      res.setHeader("Location", "/");
      res.end();
      break;

    default:
      currentPath = path.join(views, "404.html");
      res.statusCode = 404;
      break;
  }

  // send to html file
  fs.readFile(currentPath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`listening for request on ${hostname}:${port}`);
});
