export function getImage(item) {

	if (item.image && item.image.trim()) {
		return item.image;
	}

	return "/images/no-image.jpg";

}

export function truncateText(text, length = 180) {

	if (!text) return "";

	if (text.length <= length) {
		return text;
	}

	return text.substring(0, length) + "...";

}

export function formatDate(date) {

	if (!date) return "";

	return date;

}