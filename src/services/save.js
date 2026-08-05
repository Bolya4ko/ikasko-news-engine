import fs from "fs/promises";
import path from "path";

export async function saveNews(news) {

	const dir = path.resolve("data");

	await fs.mkdir(dir, { recursive: true });

	const file = path.join(dir, "news.json");

	await fs.writeFile(
		file,
		JSON.stringify(news, null, 2),
		"utf8"
	);

	console.log(`💾 Збережено ${news.length} новин у data/news.json`);

}