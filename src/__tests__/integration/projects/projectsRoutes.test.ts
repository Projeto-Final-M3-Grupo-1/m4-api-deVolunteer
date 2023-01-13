import { DataSource } from "typeorm";
import AppDataSource from "../../../data-source";
import request from "supertest";
import app from "../../../app";
import {
  mockedAdmin,
  mockedAdminUser,
  mockedOng,
  mockedOngLogin,
  mockedUser,
} from "../../mocks";
import { mockedCreateProject } from "../../mocks/projects";
describe("/projects", () => {
  let connection: DataSource;
  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.error("Error during Data Source initialization", err);
      });
    await request(app).post("/ong").send(mockedOng);
    await request(app).post("/users").send(mockedAdmin);
  });
  afterAll(async () => {
    await connection.destroy();
  });
  test("POST /projects - Must be able to create projects", async () => {
    const ongLoginResponse = await request(app)
      .post("/login")
      .send(mockedOngLogin);
    const response = await request(app)
      .post("/projects")
      .set("Authorization", `Bearer ${ongLoginResponse.body.token}`)
      .send(mockedCreateProject);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("status");
    expect(response.body).toHaveProperty("projectsPicture");
    expect(response.body.title);
    expect(response.body.description);
    expect(response.body.status);
    expect(response.body.projectsPicture);
    expect(response.status).toEqual(201);
  });
  test("POST /projects - Not logged in users must not be able to create projects", async () => {
    const response = await request(app)
      .post("/projects")
      .send(mockedCreateProject);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toEqual(401);
  });
  test("POST /projects - Not ong users must not be able to create projects", async () => {
    const userResponse = await request(app).post("/login").send(mockedOng);
    const response = await request(app)
      .post("/projects")
      .set("Authorization", `Bearer ${userResponse.body.token}`)
      .send(mockedCreateProject);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toEqual(409);
  });
  test("GET /projects - Must be able to list projects", async () => {
    const adminUserResponse = await request(app).post("/login").send(mockedOng);
    const response = await request(app)
      .get("/projects")
      .set("Authorization", `Bearer ${adminUserResponse.body.token}`);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("title");
    expect(response.body[0]).toHaveProperty("description");
    expect(response.body[0]).toHaveProperty("status");
    expect(response.body[0]).toHaveProperty("projectsPicture");
    expect(response.status).toEqual(200);
  });
  test("GET /projects - Not logged in users must not be able to list projects", async () => {
    const response = await request(app).get("/projects");
    expect(response.body).toHaveProperty("message");
    expect(response.status).toEqual(401);
  });
  test("PATCH /projects/:id - Must be able to update projects", async () => {
    const adminUserResponse = await request(app)
      .post("/login")
      .send(mockedAdmin);
    const projects = await request(app)
      .get("/projects")
      .set("Authorization", `Bearer ${adminUserResponse.body.token}`);
    const projectsId = projects.body.id;
    console.log(projectsId);
    const projectsValue = {
      title: "Test Edit",
      description: "oioi",
      projectsPicture: "google.com",
    };
    console.log(projectsValue);
    const response = await request(app)
      .patch(`/projects/${projectsId}`)
      .set("Authorization", `Bearer ${adminUserResponse.body.token}`)
      .send(projectsValue);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("title");
    expect(response.body[0]).toHaveProperty("description");
    expect(response.body[0]).toHaveProperty("status");
    expect(response.body[0]).toHaveProperty("projectsPicture");
    expect(response.body.title).toEqual(projectsValue.title);
    expect(response.body.description).toEqual(projectsValue.description);
    expect(response.body.projectsPicture).toEqual(
      projectsValue.projectsPicture
    );

    expect(response.status).toBe(200);
  });
  test("PATCH /projects/:id - Must not be able to update a non-existing projects", async () => {
    const projectsValue = { title: "Test Edit" };
    const adminUserResponse = await request(app)
      .post("/login")
      .send(mockedAdminUser);
    const response = await request(app)
      .patch("/projects/1")
      .set("Authorization", `Bearer ${adminUserResponse.body.token}`)
      .send(projectsValue);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(404);
  });
  test("PATCH /projects/:id - Not admin users must not be able to update projects", async () => {
    const projectsValue = { title: "Test Edit" };
    const userResponse = await request(app).post("/login").send(mockedUser);
    const response = await request(app)
      .patch(`/projects/1`)
      .set("Authorization", `Bearer ${userResponse.body.token}`)
      .send(projectsValue);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });
  test("PATCH /projects/:id - Not admin users must not be able to update projects", async () => {
    const userResponse = await request(app).post("/login").send(mockedUser);
    const response = await request(app)
      .delete(`/projects/1`)
      .set("Authorization", `Bearer ${userResponse.body.token}`);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(403);
  });
  test("DELETE /projects/:id - Must be able to delete projects", async () => {
    const adminUserResponse = await request(app)
      .post("/login")
      .send(mockedAdminUser);
    const projectsToBeDeleted = await request(app)
      .post("/projects")
      .set("Authorization", `Bearer ${adminUserResponse.body.token}`)
      .send(mockedCreateProject);
    const projectsId = projectsToBeDeleted.body.id;
    const response = await request(app)
      .delete(`/projects/${projectsId}`)
      .set("Authorization", `Bearer ${adminUserResponse.body.token}`);
    const findprojects = await request(app)
      .get(`/projects/${projectsId}`)
      .set("Authorization", `Bearer ${adminUserResponse.body.token}`);
    expect(response.status).toBe(204);
    expect(findprojects.body.deletedAt).not.toBe(null);
  });
  test("DELETE /projects/:id - Must not be able to delete a non-existing projects", async () => {
    const adminUserResponse = await request(app)
      .post("/login")
      .send(mockedAdminUser);
    const response = await request(app)
      .delete(`/projects/1`)
      .set("Authorization", `Bearer ${adminUserResponse.body.token}`);
    expect(response.body).toHaveProperty("message");
    expect(response.status).toBe(404);
  });
});
