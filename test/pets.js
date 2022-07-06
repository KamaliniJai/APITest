import supertest from 'supertest';
import {expect} from 'chai';

const request =supertest('https://petstore.swagger.io/v2/');
const data ={ 
    id: 4,
    category: {
      id: 4,
      name: "string"
    },
    name: "bird",
    photoUrls: [
      "string"
    ],
    tags: [
      {
        "id": 4,
        "name": "string"
      }
    ],
    status: "available"};

describe ('Pets Test',()=>{
    it('Add a new Pet ',() =>{
        return request.post('pet').send(data).then((res)=>{
            expect(res.statusCode).to.eq(200);
            expect(res.body.name).to.eq(data.name);
        });
    });

    it('Get Pet by ID',() =>{
        return request.get(`pet/${data.id}`).then((res)=>{
            expect(res.body.name).to.eq(data.name);
        });
    });

    it('Update Pet by ID',() =>{
        const updateData = { 
            id: 4,
            category: {
              id: 4,
              name: "string"
            },
            name: "Parrot",
            photoUrls: [
              "string"
            ],
            tags: [
              {
                "id": 4,
                "name": "string"
              }
            ],
            status: "available"};
        return request.put('pet').send(updateData).then((res)=>{
            expect(res.statusCode).to.eq(200);
            expect(res.body.name).to.eq(updateData.name);
        });
    });

    it('Delete Pet by ID',() =>{
        return request.delete(`pet/${data.id}`).then((res)=>{
            expect(res.body.message).to.eq(data.id.toString());
        });
    });
});