import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import newsRouter from "./routes/news.js";
import { startScheduler } from "./services/scheduler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());

// Роздача статичних файлів із папки public
app.use(express.static(path.join(__dirname, "../public")));

// API
app.use("/api/news", newsRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`🚀 Сервер запущено: http://localhost:${PORT}`);
	startScheduler();
});