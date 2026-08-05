import { loadNews } from "./loadNews.js";
import { getNbuNews } from "../sources/nbu.js";
import { getMtsbuNews } from "../sources/mtsbu.js";
import { getMinfinNews } from "../sources/minfin.js";
import { getStrahnadzorNews } from "../sources/strahnadzor.js";
import { getForinsurerNews } from "../sources/forinsurer.js";
import { normalizeNews } from "./normalize.js";
import { deduplicateNews } from "./deduplicate.js";
import { saveNews } from "./saveNews.js";
import { classifyNews } from "./classifyNews.js";
import { addId } from "./addId.js";
export async function getAllNews() {

	const news = await Promise.all([
		getNbuNews(),
		getMtsbuNews(),
		getMinfinNews(),
		getStrahnadzorNews(),
		getForinsurerNews()
	]);

	let allNews = news.flat();

	const oldNews = loadNews();

	allNews = [...oldNews, ...allNews];

	allNews = normalizeNews(allNews);

	allNews = deduplicateNews(allNews);
	allNews = addId(allNews);
	allNews = classifyNews(allNews);

	allNews.sort((a, b) => {

		const dateA = new Date(a.publishedAt || 0);
		const dateB = new Date(b.publishedAt || 0);

		return dateB - dateA;

	});

	saveNews(allNews);

	return allNews;

}