import express from "express";
import { loadNews } from "../services/loadNews.js";

const router = express.Router();

router.get("/", (req, res) => {

	let news = loadNews();

	const { source, topic, search, limit, page, sort } = req.query;

	// Фільтр по джерелу
	if (source) {

		news = news.filter(item =>
			item.source.toLowerCase() === source.toLowerCase()
		);

	}

	// Фільтр по темі
	if (topic) {

		news = news.filter(item =>
			item.topic.toLowerCase() === topic.toLowerCase()
		);

	}

	// Пошук
	if (search) {

		const text = search.toLowerCase();

		news = news.filter(item =>
			item.title.toLowerCase().includes(text) ||
			item.description.toLowerCase().includes(text)
		);

	}

	// Сортування
	if (sort === "old") {

		news.reverse();

	}

	// Пагінація
	const pageNumber = parseInt(page || "1");
	const limitNumber = parseInt(limit || news.length);

	const start = (pageNumber - 1) * limitNumber;
	const end = start + limitNumber;

	res.json({

		total: news.length,

		page: pageNumber,

		limit: limitNumber,

		data: news.slice(start, end)

	});

});

export default router;