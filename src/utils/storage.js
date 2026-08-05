import fs from "fs";
import { mergeNews } from "./mergeNews.js";

const FILE = "./data/news.json";

export function saveNews(newNews) {

	let oldNews = [];

	if (fs.existsSync(FILE)) {

		const json = JSON.parse(
			fs.readFileSync(FILE, "utf8")
		);

		oldNews = json.news || [];

	}

	const news = mergeNews(oldNews, newNews);

	const data = {

		updatedAt: new Date().toISOString(),

		count: news.length,

		news

	};

	fs.writeFileSync(
		FILE,
		JSON.stringify(data, null, 2),
		"utf8"
	);

	console.log(`💾 Збережено ${news.length} новин.`);

}