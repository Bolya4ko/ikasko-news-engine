import crypto from "crypto";

export function createNewsId(news) {

	return crypto
		.createHash("sha1")
		.update(news.source + "|" + news.url + "|" + news.title)
		.digest("hex");

}