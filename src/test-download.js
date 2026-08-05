import fs from "fs";
import { chromium } from "playwright";

const browser = await chromium.launch({
	headless: true
});

const page = await browser.newPage();

let newsHtml = null;

page.on("response", async (response) => {

	if (response.url().includes("/component/source/news/all")) {

		console.log("✅ Знайдено AJAX-відповідь");

		newsHtml = await response.text();

	}

});

await page.goto("https://bank.gov.ua/ua/news/all", {
	waitUntil: "networkidle"
});

await page.waitForTimeout(3000);

await browser.close();

if (newsHtml) {

	fs.writeFileSync("./samples/nbu-news.html", newsHtml, "utf8");

	console.log("✅ Збережено samples/nbu-news.html");

} else {

	console.log("❌ AJAX-відповідь не знайдена");

}