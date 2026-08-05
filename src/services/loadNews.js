import fs from "fs";
import path from "path";

export function loadNews() {

	const file = path.resolve("data/news.json");

	if (!fs.existsSync(file)) {
		return [];
	}

	try {

		return JSON.parse(
			fs.readFileSync(file, "utf8")
		);

	} catch {

		return [];

	}

}