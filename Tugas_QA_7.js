const supertest = require('supertest');
const chai = require('chai');
const URL = 'https://reqres.in/';
const chaiJsonSchema = require('chai-json-schema')
const expect = chai.expect
const fs = require('fs')
const path = require('path');
chai.use(chaiJsonSchema);
describe('https://reqres.in/', () => {
    it("TC1 - Get", async () => {
        const schemaPath = path.resolve(__dirname, 'resources/schema/get_single_object_schema.json');
        const response = await supertest (URL)
        .get('/api/users?page=2');
        expect(response.status ).to.equal(200);
        expect(response.body).to.be.jsonSchema(schema)
    });
   it('TC2 - POST', async() => {
        const response = await supertest(URL)
        .post('/api/users')
        .send({
            "name": "morpheus",
            "job": "leader",
            "id": "420",
            "createdAt": "2024-06-22T17:11:57.297Z"
        });
        expect(response.status ===201)
   }); 
   it('TC3 -Delete', async() => {
    const response = await supertest(URL)
    .delete('/api/users/2')
    expect(response.status ===204)
   });
   it('TC4 -put', async() => {
    const response = await supertest(URL)
    .put('/api/register')
    .send({
        "id": 4,
        "token": "QpwL5tke4Pnpja7X4"
    });
    expect(response.status ===200)
   });
});
