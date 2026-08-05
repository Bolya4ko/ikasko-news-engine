import { getStrahnadzorNews } from "./sources/strahnadzor.js";

console.log("Тестуємо парсер Страхнадзор...");

const news = await getStrahnadzorNews();

console.log(`Знайдено новин: ${news.length}`);
console.log(news);