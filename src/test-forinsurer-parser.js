import { getForinsurerNews } from "./sources/forinsurer.js";

console.log("Тестуємо парсер Forinsurer...");

const news = await getForinsurerNews();

console.log(`Знайдено новин: ${news.length}`);
console.log(news);