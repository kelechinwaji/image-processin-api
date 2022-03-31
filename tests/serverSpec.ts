import supertest from "supertest";
import app  from "../src/server";


describe('endpoint test', () =>{
    it('should test the /processor endpoint', async ()=>{
        const request = supertest(app);
        const response = await request.get('/processor');
        expect(response.status).toEqual(200);
        expect(response.text).toBe('Task Completed')
    })
})