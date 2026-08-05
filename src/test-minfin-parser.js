import { getMinfinNews } from "./sources/minfin.js";

console.log("Тестуємо парсер Мінфіну...");

const news = await getMinfinNews();

console.log(`Знайдено новин: ${news.length}`);
console.log(news);
