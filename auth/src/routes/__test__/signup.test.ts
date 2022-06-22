import request from "supertest"
import { app } from "../../app"


it('returns a 201 on a successfull signup', async () => {
    return request(app)
        .post("/api/users/signup")
        .send({
            email: "lelo@gmail.com",
            password: "password"
        })
        .expect(201);
})

it("returns a 400 with an invalid email", async () => {
    return request(app)
        .post("/api/users/signup")
        .send({
            email: "lelo.com",
            password: "password"
        })
        .expect(400);
})


it("returns a 400 with an invalid password", async () => {
    return request(app)
        .post("/api/users/signup")
        .send({
            email: "lelo@gmail.com",
            password: "p"
        })
        .expect(400);
})


it("returns a 400 with missing email and password", async () => {

    await request(app)
    .post("/api/users/signup")
    .send({
        email: "lelo@gmail.com",
        password: "p"
    })
    .expect(400)
    return request(app)
        .post("/api/users/signup")
        .send({
            email: "lelo.com",
            password: "password"
        })
        .expect(400);
})


it("disallows duplicate emails", async () => {
    await request(app)
    .post("/api/users/signup")
    .send({
        email: "lelo@gmail.com",
        password: "password"
    })
    .expect(201)

    await request(app)
    .post("/api/users/signup")
    .send({
        email: "lelo@gmail.com",
        password: "password"
    })
    .expect(400)
})


it("sets a cookie after successfull signup", async () => {
   const response = await request(app)
    .post("/api/users/signup")
    .send({
        email: "lelo@gmail.com",
        password: "password"
    })
    .expect(201)


    expect(response.get("Set-Cookie")).toBeDefined()

    
})