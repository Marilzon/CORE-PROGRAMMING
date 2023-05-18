import fs from "node:fs/promises";
import path from "node:path";

const textPath = path.resolve("src", "myText.txt");

async function createText(content) {
	try {
		console.log("writing:", content.toString());
		await fs.writeFile(textPath, content);
	} catch (err) {
		console.log(err);
	}
}

createText("Hey Hey Hey");
