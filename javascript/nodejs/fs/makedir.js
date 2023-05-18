import fs from "node:fs";

const makeDir = async (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdir(dir, (err) => {
      if (err) console.log(err);
      console.log("dir created");
    });
  } else {
    console.log(dir, "already exists!");
  }
};

makeDir("assets.txt");
