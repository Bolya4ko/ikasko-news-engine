import * as cheerio from "cheerio";
import { fetchHtml } from "../utils/fetch.js";

export async function getNbuNews() {

	try {

		console.log("🔵 Парсер НБУ запущено");

		const url = "https://bank.gov.ua/ua/news/all";

		const html = await fetchHtml(url);

		if (!html) {
			console.log("❌ HTML не отримано");
			return [];
		}

		const $ = cheerio.load(html);

		const news = [];

		$(".post-item").each((index, element) => {

			const link = $(element).find("a.navbar-post");

			const title = link
				.find(".title")
				.text()
				.trim();

			const href = link.attr("href");

			const image = link
				.find("img")
				.attr("src");

			const date = link
				.find("time")
				.text()
				.trim();

			if (!title) return;

			news.push({

				source: "НБУ",

				title,

				description: "",

				url: href
					? new URL(href, "https://bank.gov.ua").href
					: "",

				image: image
					? new URL(image, "https://bank.gov.ua").href
					: "",

				date,

				publishedAt: "",

				category: "Страхування"

			});

		});

		console.log(`✅ Знайдено новин: ${news.length}`);

		return news;

	} catch (error) {

		console.error("Помилка парсера НБУ:");

		console.error(error);

		return [];

	}

}