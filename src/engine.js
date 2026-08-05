import { getNbuNews } from "./sources/nbu.js";
import { getMtsbuNews } from "./sources/mtsbu.js";
import { saveNews } from "./utils/storage.js";

console.log("iKasko News Engine запущено 🚀");

const nbuNews = await getNbuNews();
const mtsbuNews = await getMtsbuNews();

const news = [
	...nbuNews,
	...mtsbuNews
];

console.log(`Всього новин: ${news.length}`);

saveNews(news);