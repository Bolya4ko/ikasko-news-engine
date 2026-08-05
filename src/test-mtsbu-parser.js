import { getMtsbuNews } from "./sources/mtsbu.js";

const news = await getMtsbuNews();

console.log(news);