import fs from "fs";
import { fetchHtml } from "./utils/fetch.js";

const url = "https://www.strahnadzor.ua/news/";

const html = await fetchHtml(url);

if (!html) {
	console.log("❌ HTML не отримано");
	process.exit(1);
}

fs.writeFileSync("./samples/strahnadzor.html", html);

console.log("✅ strahnadzor.html збережено");