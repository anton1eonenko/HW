import superagent from "superagent"
import {expectedSingleUser, expectedListUsers, expectedObjcreateUser, expectedSingleUserNotFound, expectedUpdate, expectedLoginSuccess, expectedLoginUnsuccessful, expectedregistersuccessful, expectedregisterUnsuccessful } from "./expected"




describe ('List', ()=> {
    it ('Users', async () => {
        const res = await superagent.get ('https://reqres.in/api/users?page=2')
        // console.log(res.body); 
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(expectedListUsers)
    })
    it ('Single User', async () => {
        const res = await superagent.get ('https://reqres.in/api/users/2')
        // console.log(res.body); 
        expect(res.status).toEqual(200);
        expect(res.body).toEqual(expectedSingleUser)
    })

    it ('Single User not found', async () => {
        const res = await superagent.get ('https://reqres.in/api/users/23')
        // console.log(res.body); 
        expect(res.status).toEqual(404);
        expect(res.body).toEqual(expectedSingleUserNotFound)
    })
})

describe ('User', () => {
    it ('create User', async () => {
        const res = await superagent
            .post('https://reqres.in/api/users')
            .set("Content-Type", "application/json")
            .send({name: "morpheus", job: "leader", id: "174"})
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual(expectedObjcreateUser.name)
        expect(res.body.job).toEqual(expectedObjcreateUser.job)
        expect(res.body.id).toEqual(expectedObjcreateUser.id)
    })
    it ('update User', async () => {
        const res = await superagent
            .put('https://reqres.in/api/users/2')
            .set("Content-Type", "application/json")
            .send({name: "morpheus", job: "zion resident"})
        expect(res.statusCode).toEqual(200);
        expect(res.body.name).toEqual(expectedUpdate.name)
        expect(res.body.job).toEqual(expectedUpdate.job)
    })
    it ('Delete User', async () => {
        const res = await superagent
            .delete('https://reqres.in/api/users/2')
            .set("Content-Type", "application/json")
        expect(res.statusCode).toEqual(204);
    })
})

describe ('Register', () => {
    it ('Register successful', async () => {
        const res = await superagent
            .post('https://reqres.in/api/register')
            .set("Content-Type", "application/json")
            .send({"email": "eve.holt@reqres.in", "password": "cityslicka"})
        expect(res.statusCode).toEqual(200);
        expect(res.body.id).toEqual(expectedregistersuccessful.id)
        expect(res.body.token).toEqual(expectedregistersuccessful.token)
    })

    it ('Register unsuccessful', async () => {
        const res = await superagent
            .post('https://reqres.in/api/register')
            .set("Content-Type", "application/json")
            .send({"email": "sydney@fife"})
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toEqual(expectedregisterUnsuccessful.error)
    })
})

describe ('Login', () => {
    it ('Login successful', async () => {
        const res = await superagent
            .post('https://reqres.in/api/login')
            .set("Content-Type", "application/json")
            .send({"email": "eve.holt@reqres.in", "password": "cityslicka"})
        expect(res.statusCode).toEqual(200);
        expect(res.body.token).toEqual(expectedLoginSuccess.token)
    })
    it ('Login unsuccessful', async () => {
        try {
            const res = await superagent
            .post('https://reqres.in/api/login')
            .set("Content-Type", "application/json")
            .send({"email": "peter@klaven"})
        expect(res.statusCode).toEqual(400);
        expect(res.body.error).toEqual(expectedLoginUnsuccessful.error)
        } catch (err: any) {
            expect(err.message).toEqual('Not Found')
        }
    })
})


