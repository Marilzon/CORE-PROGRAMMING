import fs from "node:fs";
import path from "node:path";

const textPath = path.resolve("src", "myText.txt");

async function readText() {
	try {
		const data = fs.readFileSync(textPath, { encoding: "utf8" });
		console.log(data);
	} catch (err) {
		console.log(err);
	}
}

readText();
