import request from "supertest";
import { DataSource } from "typeorm";
import app from "../../../app";
import AppDataSource from "../../../data-source";
import {
  mockedLogin,
  mockedOng,
  mockedOngLogin,
  mockedUser,
} from "../../mocks";

describe("/login", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });

    await request(app).post("/users").send(mockedUser);
    await request(app).post("/ong").send(mockedOng);
  });

  afterAll(async () => {
    await connection.destroy();
  });

  test("POST /login -  should be able to login with the User", async () => {
    const response = await request(app).post("/login").send(mockedLogin);

    expect(response.body).toHaveProperty("token");
    expect(response.status).toBe(200);
  });

  test("POST /login -  should be able to login with the ONG", async () => {
    const response = await request(app).post("/login").send(mockedOngLogin);

    expect(response.body).toHaveProperty("token");
    expect(response.status).toBe(200);
  });

  test("POST /login -  should not be able to login with incorrect password or email", async () => {
    const response = await request(app).post("/login").send({
      email: "felipe@mail.com",
      password: "1234567",
    });

    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });

  test("POST /login -  should not be able to login with the user with isActive = false", async () => {
    const loginResponse = await request(app).post("/login").send(mockedLogin);
    const findUser = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${loginResponse.body.token}`);
    await request(app)
      .delete(`/users/${findUser.body[0].id}`)
      .set("Authorization", `Bearer ${loginResponse.body.token}`);
    const findUserTwo = await request(app)
      .get("/users")
      .set("Authorization", `Bearer ${loginResponse.body.token}`);

    const response = await request(app).post("/login").send(mockedLogin);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });

  //e-mail errado
  //senha errada
});
