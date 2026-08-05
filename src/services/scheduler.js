import cron from "node-cron";
import { getAllNews } from "./news.js";


export function startScheduler() {


	console.log("⏰ Планувальник новин запущено");


	// кожні 30 хвилин
	cron.schedule("*/30 * * * *", async () => {


		console.log("🔄 Автоматичне оновлення новин");


		try {

			const news = await getAllNews();

			console.log(
				`✅ Оновлено новин: ${news.length}`
			);


		} catch (error) {

			console.error(
				"❌ Помилка оновлення:",
				error
			);

		}


	});


}