export function mergeNews(oldNews, newNews) {

	const map = new Map();

	// Спочатку старі новини
	for (const item of oldNews) {
		map.set(item.url, item);
	}

	// Потім нові (оновлюють існуючі)
	for (const item of newNews) {
		map.set(item.url, item);
	}

	return [...map.values()];

}