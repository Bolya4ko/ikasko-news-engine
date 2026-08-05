import * as cheerio from "cheerio";
import { fetchHtml } from "../utils/fetch.js";

export async function getMinfinNews() {

	try {

		console.log("🟢 Парсер Мінфіну запущено");

		const url = "https://minfin.com.ua/ua/insurance/";

		const html = await fetchHtml(url);

		if (!html) {

			console.log("❌ HTML Мінфіну не отримано");
			return [];

		}

		const $ = cheerio.load(html);

		const news = [];

		$("article.mfz-post").each((index, element) => {

			const title = $(element)
				.find(".mfz-post-title a")
				.text()
				.trim();

			const href = $(element)
				.find(".mfz-post-title a")
				.attr("href");

			const image = $(element)
				.find("img")
				.attr("src");

			if (!title) return;

			news.push({

				source: "Мінфін",

				title,

				description: "",

				url: href
					? new URL(href, "https://minfin.com.ua").href
					: "",

				image: image
					? new URL(image, "https://minfin.com.ua").href
					: "",

				date: "",

				publishedAt: "",

				category: "Страхування"

			});

		});

		console.log(`✅ Знайдено новин Мінфіну: ${news.length}`);

		return news;

	} catch (error) {

		console.error("Помилка парсера Мінфіну:");
		console.error(error);

		return [];

	}

}