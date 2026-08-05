import { getAllNews } from "./services/news.js";
import { saveNews } from "./services/save.js";

console.log("Збираємо всі новини...");

const news = await getAllNews();

console.log(`Всього новин: ${news.length}`);

await saveNews(news);