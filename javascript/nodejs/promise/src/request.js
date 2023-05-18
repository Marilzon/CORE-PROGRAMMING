import request from "request";

const githubURL = "https://api.github.com/users/marilzon/repos";

request(
  githubURL,
  { headers: { "User-Agent": "node.js" } },
  (err, res, body) => {
    console.log(JSON.parse(body));
  }
);
