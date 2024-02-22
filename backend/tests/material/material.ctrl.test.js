const request = require("supertest");
const app = require("../../app");
const faker = require("@faker-js/faker")

describe("GET /materials/", () => {
    it("should return a 400", async () => {
            const res = await request(app).get("/materials/").send()
        expect(res.status).toBe(200)
        expect(res.text).toBe('all the materials')
    })
})
// describe("POST /materials/", () => {
//     it("should return a 400", async () => {
//             const res = await request(app).post("/materials/").send({
//             id: 0,
//             title: faker.person.fullName,
//             isbn: faker.isbn,
//             ubication: faker.string.alphanumeric({length: 2}),
//             edition: faker.number.int({min: 1, max:15}),
//             stock: -1,
//             used: true,
//             price: 2.99
//         })
//         expect(res.status).toBe(400)
//     })
// })