import fs from "node:fs";
import path from "node:path";

const textPath = path.resolve("src", "text", "stream.txt");

const readStream = fs.createReadStream(textPath, {
	encoding: "utf-8",
});

const writeStream = fs.createWriteStream(
	path.resolve("src", "text", `newFile${Date.now()}.txt`)
);

readStream.pipe(writeStream);
