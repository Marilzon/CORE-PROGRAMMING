import fs from "node:fs";

const removeDir = async (dir) => {
  if (fs.existsSync(dir)) {
    fs.rmdir(dir, (err) => {
      if (err) console.log(err);
      console.log("dir deleted");
    });
  } else {
    console.log(dir, "not exists!");
  }
};

removeDir("assets");
