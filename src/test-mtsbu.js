import fs from "fs";
import { chromium } from "playwright";

const browser = await chromium.launch({
	headless: true
});

const page = await browser.newPage({

	userAgent:
		"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/139.0.0.0 Safari/537.36"

});

page.on("response", response => {

	const url = response.url();

	if (
		url.includes("news") ||
		url.includes("ajax") ||
		url.includes("api")
	) {

		console.log(response.status(), url);

	}

});

await page.goto("https://mtsbu.ua/news", {
	waitUntil: "networkidle",
	timeout: 30000
});

const html = await page.content();

fs.writeFileSync("./samples/mtsbu.html", html);

console.log("✅ mtsbu.html збережено");

await browser.close();