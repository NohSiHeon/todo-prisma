import express from "express";
import "dotenv/config";
import { apiRouter } from "./routers/api.router.js"

const app = express();
const port = process.env.SERVER_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRouter);


app.get("/health-check", (req, res) => {
	res.status(200).send("OK");
});

app.listen(port, () => {
	console.log(`${port} 포트에서 서버가 실행됐습니다.`);
});