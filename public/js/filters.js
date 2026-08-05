export function filterNews(news, search = "", source = "") {

	search = search.toLowerCase().trim();

	return news.filter(item => {

		const matchesSearch =
			item.title.toLowerCase().includes(search) ||
			item.description.toLowerCase().includes(search);

		const matchesSource =
			!source || item.source === source;

		return matchesSearch && matchesSource;

	});

}