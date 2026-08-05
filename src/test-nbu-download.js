import fs from "fs";
import { fetchHtml } from "./utils/fetch.js";

const url = "https://bank.gov.ua/ua/news/all?tag=Insurance";

const html = await fetchHtml(url);

fs.writeFileSync("samples/nbu.html", html);

console.log("✅ nbu.html збережено");