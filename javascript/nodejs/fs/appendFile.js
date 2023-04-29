import fs from "node:fs/promises";
import path from "node:path";

const textPath = path.resolve("src", "myText.txt");

async function updateFileContent(content) {
	try {
		console.log("text to append is: ", content.toString());
		await fs.appendFile(textPath, content);
	} catch (err) {
		console.log(err);
	}
}

updateFileContent("Appending force to this person\n");
