import * as cheerio from "cheerio";
import { fetchHtml } from "../utils/fetch.js";

export async function getForinsurerNews() {

	try {

		console.log("🟣 Парсер Forinsurer запущено");

		const url = "https://forinsurer.com/news";

		const html = await fetchHtml(url);

		if (!html) {

			console.log("❌ HTML Forinsurer не отримано");
			return [];

		}

		const $ = cheerio.load(html);

		const news = [];

		$(".news_item.anons").each((index, element) => {

			const title = $(element)
				.find(".news_subject > a")
				.text()
				.trim();

			const href = $(element)
				.find(".news_subject > a")
				.attr("href");

			const description = $(element)
				.find(".news_anons")
				.text()
				.trim();

			const image = $(element)
				.find(".news_img img")
				.attr("src");

			if (!title) return;

			news.push({

				source: "Forinsurer",

				title,

				description,

				url: href
					? new URL(href, "https://forinsurer.com/").href
					: "",

				image: image || "",

				date: "",

				publishedAt: "",

				category: "Страхування"

			});

		});

		console.log(`✅ Знайдено новин Forinsurer: ${news.length}`);

		return news;

	} catch (error) {

		console.error("Помилка парсера Forinsurer:");
		console.error(error);

		return [];

	}

}