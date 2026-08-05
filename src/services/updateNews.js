import { getAllNews } from "./news.js";

console.log("🔄 Оновлення новин...");

try {

	const news = await getAllNews();

	console.log(`✅ Готово! Оновлено ${news.length} новин.`);

} catch (error) {

	console.error("❌ Помилка оновлення:");

	console.error(error);

}