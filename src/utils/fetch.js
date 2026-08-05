import axios from "axios";

/**
 * Завантаження HTML через Axios
 */
export async function fetchHtml(url) {

	try {

		const response = await axios.get(url, {

			timeout: 30000,

			headers: {
				"User-Agent":
					"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/139.0.0.0 Safari/537.36"
			}

		});

		return response.data;

	} catch (error) {

		console.error("fetchHtml:", error.message);

		return null;

	}

}

/**
 * Завантаження JSON через Axios
 */
export async function fetchJson(url) {

	try {

		const response = await axios.get(url, {

			timeout: 15000,

			headers: {
				"User-Agent": "Mozilla/5.0"
			}

		});

		return response.data;

	} catch (error) {

		console.error("fetchJson:", error.message);

		return null;

	}

}