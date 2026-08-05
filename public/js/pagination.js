let visibleItems = 12;

export function resetPagination() {
	visibleItems = 12;
}

export function getVisibleNews(news) {
	return news.slice(0, visibleItems);
}

export function canLoadMore(news) {
	return visibleItems < news.length;
}

export function loadMore() {
	visibleItems += 12;
}