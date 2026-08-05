import fs from "fs";
import { fetchHtml } from "./utils/fetch.js";

const url = "https://forinsurer.com/news";

const html = await fetchHtml(url);

if (!html) {

	console.log("❌ HTML не отримано");
	process.exit(1);

}

fs.writeFileSync("./samples/forinsurer.html", html);

console.log("✅ forinsurer.html збережено");