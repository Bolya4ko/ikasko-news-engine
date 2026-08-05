import * as cheerio from "cheerio";
import { fetchHtml } from "../utils/fetch.js";

export async function getStrahnadzorNews() {

	try {

		console.log("🟠 Парсер Страхнадзор запущено");

		const url = "https://www.strahnadzor.ua/news";

		const html = await fetchHtml(url);

		if (!html) {

			console.log("❌ HTML Страхнадзор не отримано");
			return [];

		}

		const $ = cheerio.load(html);

		const news = [];

		$("div.n.relative").each((index, element) => {

			const title = $(element)
				.find("h3 a")
				.text()
				.trim();

			const href = $(element)
				.find("h3 a")
				.attr("href");

			const description = $(element)
				.find(".lead")
				.text()
				.trim();

			const date = $(element)
				.find(".date")
				.text()
				.trim();

			if (!title) return;

			news.push({

				source: "Страхнадзор",

				title,

				description,

				url: href
					? new URL(href, "https://www.strahnadzor.ua").href
					: "",

				image: "",

				date,

				publishedAt: "",

				category: "Страхування"

			});

		});

		console.log(`✅ Знайдено новин Страхнадзор: ${news.length}`);

		return news;

	} catch (error) {

		console.error("Помилка парсера Страхнадзор:");
		console.error(error);

		return [];

	}

}