import { getNbuNews } from "./sources/nbu.js";

console.log("Тестуємо парсер НБУ...");

const news = await getNbuNews();

console.log("Знайдено новин:", news.length);

console.log(news);