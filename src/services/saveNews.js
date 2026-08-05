import fs from "fs";
import path from "path";

export function saveNews(news) {

	const file = path.join("data", "news.json");

	fs.mkdirSync("data", { recursive: true });

	fs.writeFileSync(
		file,
		JSON.stringify(news, null, 2),
		"utf8"
	);

	console.log(`💾 Збережено ${news.length} новин`);

}