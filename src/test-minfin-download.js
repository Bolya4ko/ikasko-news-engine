import fs from "fs";
import { fetchHtml } from "./utils/fetch.js";

const url = "https://minfin.com.ua/ua/insurance/";

const html = await fetchHtml(url);

if (!html) {
	console.log("Не вдалося завантажити сторінку.");
	process.exit(1);
}

fs.writeFileSync("./samples/minfin.html", html);

console.log("✅ minfin.html збережено");