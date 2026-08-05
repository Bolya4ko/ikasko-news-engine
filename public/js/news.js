import { getNews } from "./api.js";
import { renderNews } from "./render.js";
import { filterNews } from "./filters.js";
import {
	resetPagination,
	getVisibleNews,
	canLoadMore,
	loadMore
} from "./pagination.js";
let filteredNews = [];
let allNews = [];

async function init() {

	try {

		const { data } = await getNews();

		allNews = data;
		filteredNews = [...allNews];
		resetPagination();
		renderNews(getVisibleNews(filteredNews));

		initFilters();
		initLoadMore();

	} catch (error) {

		console.error(error);

	}

}

function initFilters() {
	const searchInput = document.getElementById("searchInput");
	const sourceFilter = document.getElementById("sourceFilter");

	if (!searchInput || !sourceFilter) {
		return;
	}

	function update() {

		filteredNews = filterNews(
			allNews,
			searchInput.value,
			sourceFilter.value
		);

		resetPagination();

		renderNews(getVisibleNews(filteredNews));

		updateLoadMoreButton();

	}

	searchInput.addEventListener("input", update);

	sourceFilter.addEventListener("change", update);

}
function initLoadMore() {

	const button = document.getElementById("loadMore");

	if (!button) return;

	button.addEventListener("click", () => {

		loadMore();

		renderNews(getVisibleNews(filteredNews));

		updateLoadMoreButton();

	});

	updateLoadMoreButton();

}

function updateLoadMoreButton() {

	const button = document.getElementById("loadMore");

	if (!button) return;

	button.style.display =
		canLoadMore(filteredNews)
			? "inline-block"
			: "none";

}
init();
