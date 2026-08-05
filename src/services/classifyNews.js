export function classifyNews(news) {

	return news.map(item => {

		const text = (
			item.title + " " +
			item.description
		).toLowerCase();


		let topic = "Інше";


		if (
			text.includes("автоцивіл") ||
			text.includes("осцпв") ||
			text.includes("цивільн")
		) {

			topic = "ОСЦПВ";

		} else if (
			text.includes("зелена картка") ||
			text.includes("green card")
		) {

			topic = "Зелена картка";

		} else if (
			text.includes("каско")
		) {

			topic = "КАСКО";

		} else if (
			text.includes("туристич") ||
			text.includes("подорож")
		) {

			topic = "Туристичне страхування";

		} else if (
			text.includes("нбу") ||
			text.includes("національний банк") ||
			text.includes("ліцензі")
		) {

			topic = "Регулювання";

		} else if (
			text.includes("мтсбу")
		) {

			topic = "МТСБУ";

		}


		return {

			...item,

			topic

		};

	});

}