import * as cheerio from "cheerio";
import { fetchHtml } from "../utils/fetch.js";

export async function getMtsbuNews() {

	try {

		console.log("🟢 Парсер МТСБУ запущено");

		const url = "https://mtsbu.ua/news";

		const html = await fetchHtml(url);

		if (!html) {

			console.log("❌ HTML не отримано");

			return [];

		}

		const $ = cheerio.load(html);

		const news = [];

		$("article").each((index, element) => {

			const title = $(element)
				.find("h3 a")
				.text()
				.trim();

			if (!title) return;

			const href = $(element)
				.find("h3 a")
				.attr("href");

			const description = $(element)
				.find(".line-clamp-2")
				.text()
				.trim();

			const date = $(element)
				.find("time")
				.text()
				.trim();

			const image = $(element)
				.find("img")
				.attr("src");

			news.push({

				source: "МТСБУ",

				title,

				description,

				url: href,

				image,

				date,

				category: "Страхування"

			});

		});

		console.log(`✅ Знайдено новин МТСБУ: ${news.length}`);

		return news;

	} catch (error) {

		console.error(error);

		return [];

	}

}