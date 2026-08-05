export function addId(news) {

	return news.map(item => {

		if (item.id) {
			return item;
		}


		const id = generateId(item);


		return {
			...item,
			id
		};

	});

}


function generateId(item) {

	const text = (
		item.source +
		item.title +
		item.url
	).toLowerCase();


	let hash = 0;


	for (let i = 0; i < text.length; i++) {

		const char = text.charCodeAt(i);

		hash =
			((hash << 5) - hash) + char;

		hash = hash & hash;

	}


	return Math.abs(hash).toString();

}