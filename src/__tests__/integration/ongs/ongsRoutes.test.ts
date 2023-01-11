import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import { mockedDeleteOng, mockedOng } from "../../mocks";
import { IOngResponse } from "../../../interfaces/ongs";

describe("/ong", () => {
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

  test("POST /ong -  Must be able to create an ONG", async () => {
    const response = await request(app).post("/ong").send(mockedOng);

    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("companyName");
    expect(response.body).toHaveProperty("email");
    expect(response.body).toHaveProperty("github");
    expect(response.body).toHaveProperty("linkedin");
    expect(response.body).toHaveProperty("profilePicture");
    expect(response.body).toHaveProperty("cnpj");
    expect(response.body).toHaveProperty("isActive");
    expect(response.body).toHaveProperty("phone");
    expect(response.body).toHaveProperty("ownerName");
    expect(response.body).toHaveProperty("createdAt");
    expect(response.body).toHaveProperty("updatedAt");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body.companyName).toEqual("ABCDE");
    expect(response.body.email).toEqual("abcde@email.com");
    expect(response.body.isActive).toEqual(true);
    expect(response.status).toEqual(201);
  });

  test("GET /ong -  Must be able to list ONGs", async () => {
    const response = await request(app).get("/ong");

    expect(response.body).toHaveLength(1);
    expect(response.body[0]).toHaveProperty("companyName");
    expect(response.body[0]).toHaveProperty("email");
    expect(response.body[0]).toHaveProperty("github");
    expect(response.body[0]).toHaveProperty("linkedin");
    expect(response.body[0]).toHaveProperty("profilePicture");
    expect(response.body[0]).toHaveProperty("cnpj");
    expect(response.body[0]).toHaveProperty("isActive");
    expect(response.body[0]).toHaveProperty("phone");
    expect(response.body[0]).toHaveProperty("ownerName");
    expect(response.body[0]).toHaveProperty("createdAt");
    expect(response.body[0]).toHaveProperty("updatedAt");
    expect(response.body[0]).not.toHaveProperty("password");
    expect(response.body[0].companyName).toEqual("ABCDE");
    expect(response.body[0].email).toEqual("abcde@email.com");
    expect(response.body[0].isActive).toEqual(true);
    expect(response.status).toEqual(200);
  });

  test("DELETE /ong -  Must be able to delete an ONG", async () => {
    const { body: ong } = await request(app).post("/ong").send(mockedDeleteOng);

    const response = await request(app).delete(`/ong/${ong.id}`);

    expect(response.status).toEqual(204);
  });
});
