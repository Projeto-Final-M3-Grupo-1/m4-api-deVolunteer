import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedUser } from "../../mocks";

describe("/users", () => {
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

	test("POST /users -  Must be able to create a user", async () => {
		const response = await request(app).post("/users").send(mockedUser);

		expect(response.body).toHaveProperty("id");
		expect(response.body).toHaveProperty("name");
		expect(response.body).toHaveProperty("email");
		expect(response.body).toHaveProperty("github");
		expect(response.body).toHaveProperty("linkedin");
		expect(response.body).toHaveProperty("profilePicture");
		expect(response.body).toHaveProperty("isAdm");
		expect(response.body).toHaveProperty("isActive");
		expect(response.body).toHaveProperty("createdAt");
		expect(response.body).toHaveProperty("updatedAt");
		expect(response.body).not.toHaveProperty("password");
		expect(response.body.name).toEqual("Rafael Quadros");
		expect(response.body.email).toEqual("rafaelquadros@mail.com");
		expect(response.body.isAdm).toEqual(false);
		expect(response.body.isActive).toEqual(true);
		expect(response.status).toEqual(201);
	});
});
