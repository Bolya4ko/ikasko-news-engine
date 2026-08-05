import { createNewsId } from "./id.js";
export function normalizeNews(news) {
	return news.map(item => ({

		...item,

		id: item.id || createNewsId(item),

		source: item.source || "",

		title: item.title?.trim() || "",

		description: item.description?.trim() || "",

		url: item.url || "",

		image: item.image || "",

		date: item.date || "",

		publishedAt: item.publishedAt || normalizeDate(item.date),

		createdAt: item.createdAt || new Date().toISOString(),

		updatedAt: new Date().toISOString(),

		category: item.category || "Страхування"

	}));
}

function normalizeDate(date) {

	if (!date) return "";

	const months = {
		// Українські
		"січ": "01",
		"лют": "02",
		"бер": "03",
		"кві": "04",
		"трав": "05",
		"черв": "06",
		"лип": "07",
		"серп": "08",
		"вер": "09",
		"жовт": "10",
		"лист": "11",
		"груд": "12",

		// Російські
		"января": "01",
		"февраля": "02",
		"марта": "03",
		"апреля": "04",
		"мая": "05",
		"июня": "06",
		"июля": "07",
		"августа": "08",
		"сентября": "09",
		"октября": "10",
		"ноября": "11",
		"декабря": "12"
	};

	const match = date.match(/(\d+)\s+([^\s]+)\.?\s+(\d{4})/i);

	if (!match) return "";

	const day = match[1].padStart(2, "0");
	const month = months[match[2].toLowerCase()] || "01";
	const year = match[3];

	return `${year}-${month}-${day}`;
}