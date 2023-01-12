import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";

describe("/technologies", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
    await request(app).post(
      `/technologies/${process.env.PG_CODE_FOR_INSERT_TECHS}`
    );
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("GET /technologies -  Must be able to list technologies", async () => {
    const response = await request(app).get("/technologies");

    expect(response.body).toHaveLength(19);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("name");
  });
});
