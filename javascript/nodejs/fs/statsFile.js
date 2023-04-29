import fs from "node:fs/promises";
import path from "node:path";

const textPath = path.resolve("src", "myText.txt");

async function getStatOfFile(file) {
	try {
		const stats = await fs.stat(file);
		stats.isFile();
		stats.isDirectory();
		stats.isSymbolicLink();
		stats.size;

		console.log(stats);
	} catch (err) {
		console.log(err);
	}
}

console.log(getStatOfFile(textPath));
