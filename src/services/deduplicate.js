export function deduplicateNews(news) {

	const unique = new Map();

	for (const item of news) {

		const key = item.title
			.toLowerCase()
			.replace(/\s+/g, " ")
			.trim();

		if (!unique.has(key)) {
			unique.set(key, item);
		}

	}

	return [...unique.values()];

}