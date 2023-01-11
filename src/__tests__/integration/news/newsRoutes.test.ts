import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedNews, mockedToBeDeletedNews } from "../../mocks";

describe("/news", () => {
	let connection: DataSource;

	beforeAll(async () => {
		await AppDataSource.initialize()
			.then((res) => {
				connection = res;
			})
			.catch((err) => {
				console.error("Error during Data Source initialization", err);
			});
	});

	afterAll(async () => {
		await connection.destroy();
	});

	test("POST /news - Must be able to create a news", async () => {
		const response = await request(app).post("/news").send(mockedNews);

		expect(response.body).toHaveProperty("id");
		expect(response.body).toHaveProperty("title");
		expect(response.body).toHaveProperty("description");
		expect(response.body).toHaveProperty("site");
		expect(response.body).toHaveProperty("img");
		expect(response.status).toEqual(201);
	});

	test("GET /news - Must be able to list news", async () => {
		const response = await request(app).get("/news");

		expect(response.body[0]).toHaveProperty("id");
		expect(response.body[0]).toHaveProperty("title");
		expect(response.body[0]).toHaveProperty("description");
		expect(response.body[0]).toHaveProperty("site");
		expect(response.body[0]).toHaveProperty("img");
		expect(response.status).toEqual(200);
	});

	test("GET /news/:id - Must be able to list news by id", async () => {
		const news = await request(app).get("/news");
		const newsId = news.body[0].id;

		const response = await request(app).get(`/news/${newsId}`);

		expect(response.body).toHaveProperty("id");
		expect(response.body).toHaveProperty("title");
		expect(response.body).toHaveProperty("description");
		expect(response.body).toHaveProperty("site");
		expect(response.body).toHaveProperty("img");
		expect(response.status).toEqual(200);
	});

	test("PATCH /news/:id - Must be able to update a news", async () => {
		const news = await request(app).get("/news");
		const newsId = news.body[0].id;
		const newsValue = { title: "Correção" };
		const response = await request(app)
			.patch(`/news/${newsId}`)
			.send(newsValue);

		expect(response.body).toHaveProperty("id");
		expect(response.body).toHaveProperty("title");
		expect(response.body).toHaveProperty("description");
		expect(response.body).toHaveProperty("site");
		expect(response.body).toHaveProperty("img");
		expect(response.body.title).toEqual(newsValue.title);
		expect(response.status).toBe(200);
	});

	test("DELETE /news/:id - Must be able to delete a news", async () => {
		const newsToBeDeleted = await request(app)
			.post("/news")
			.send(mockedToBeDeletedNews);

		const newsId = newsToBeDeleted.body.id;

		const response = await request(app).delete(`/news/${newsId}`);
		const findNews = await request(app).get(`/news/${newsId}`);

		expect(response.status).toBe(204);
		expect(findNews.body.deletedAt).not.toBe(null);
	});
});
