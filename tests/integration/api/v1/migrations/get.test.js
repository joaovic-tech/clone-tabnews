import database from "infra/database";

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

beforeAll(cleanDatabase);

test("GET to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);

  expect(process.env.NODE_ENV).toEqual("test");
  expect(process.env.POSTGRES_HOST).toBeDefined();
  expect(process.env.POSTGRES_PORT).toBeDefined();
  expect(process.env.POSTGRES_USER).toBeDefined();
  expect(process.env.POSTGRES_DB).toBeDefined();
  expect(process.env.POSTGRES_PASSWORD).toBeDefined();
});
