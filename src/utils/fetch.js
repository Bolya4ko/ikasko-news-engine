import axios from "axios";
import { chromium } from "playwright";

/**
 * Завантаження HTML через Playwright
 */
export async function fetchHtml(url) {

	const browser = await chromium.launch({
		headless: true
	});

	try {

		const page = await browser.newPage({

			userAgent:
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/139.0.0.0 Safari/537.36"

		});

		await page.goto(url, {
			waitUntil: "domcontentloaded",
			timeout: 60000
		});

		const html = await page.content();

		await browser.close();

		return html;

	} catch (error) {

		await browser.close();

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

				"User-Agent":
					"Mozilla/5.0"

			}

		});

		return response.data;

	} catch (error) {

		console.error("fetchJson:", error.message);

		return null;

	}

}