export async function getNews() {

	const response = await fetch("/api/news");

	if (!response.ok) {
		throw new Error("Помилка завантаження новин");
	}

	return await response.json();

}