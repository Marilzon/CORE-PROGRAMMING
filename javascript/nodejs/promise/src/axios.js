import axios from "axios";

const githubREPOS = (user) => `https://api.github.com/users/${user}/repos`;
const users = ["marilzon", "huser", "imerik1"];

for (let user of users) {
  const res = await axios.get(githubREPOS(user));
  console.log(res.status);
}
