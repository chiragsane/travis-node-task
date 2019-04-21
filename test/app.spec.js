const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app');

chai.use(chaiHttp);

const responseString = 'APIs hosted successfully!';
describe('test GET method', () => {
  it('should return correct response', () => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res.statusCode).to.equal(200);
        expect(res.text).to.equal(responseString);
      });
  });
});
