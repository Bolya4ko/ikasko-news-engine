import { getImage, truncateText } from "./utils.js";


export function renderNews(news) {

	const featured = document.getElementById("featuredNews");
	const container = document.getElementById("newsContainer");

	if (!featured || !container) {
		return;
	}

	featured.innerHTML = "";
	container.innerHTML = "";


	if (!news.length) {

		container.innerHTML = "<p>Новин не знайдено.</p>";
		return;

	}


	const first = news.find(
		item => item.image && item.image.trim()
	) || news[0];


	renderFeaturedNews(featured, first);

	renderNewsGrid(
		container,
		news.filter(item => item !== first)
	);

}



function renderFeaturedNews(container, item) {

	container.innerHTML = `

		<article class="featured-card">

			<img
				class="featured-image"
				src="${getImage(item)}"
				alt="${item.title}">

			<div class="featured-content">

				<div class="news-source">
					${item.source}
				</div>


				<h2>
					${item.title}
				</h2>


				<p>
					${truncateText(item.description, 250)}
				</p>


				<div class="news-footer">

					<span class="news-date">
						${item.date}
					</span>


					<a
						class="news-link"
						href="${item.url}"
						target="_blank"
						rel="noopener">

						Читати →

					</a>

				</div>

			</div>

		</article>

	`;

}



function renderNewsGrid(container, news) {

	const fragment = document.createDocumentFragment();


	news.forEach(item => {

		fragment.appendChild(
			createCard(item)
		);

	});


	container.appendChild(fragment);

}



function createCard(item) {

	const article = document.createElement("article");

	article.className = "news-card";


	article.innerHTML = `

		<img
			class="news-image"
			src="${getImage(item)}"
			alt="${item.title}"
			loading="lazy">


		<div class="news-content">


			<div class="news-source">
				${item.source}
			</div>


			<h2 class="news-title">
				${item.title}
			</h2>


			<p class="news-description">
				${truncateText(item.description)}
			</p>


			<div class="news-footer">


				<span class="news-date">
					${item.date}
				</span>


				<a
					class="news-link"
					href="${item.url}"
					target="_blank"
					rel="noopener">

					Читати →

				</a>


			</div>


		</div>

	`;


	return article;

}