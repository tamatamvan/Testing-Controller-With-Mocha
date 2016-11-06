const mocha = require('mocha')
const chai = require('chai')
const assert = chai.assert
const expect = chai.expect
const controller = require('../controllers/controller.api.memo')
const chaiHTTP = require('chai-http')
chai.use(chaiHTTP)
const should = chai.should()

// describe('#multiple', () => {
//   it('it should return the multiple value of a & b params', () => {
//     assert.equal(10, controller.multiple(5, 2))
//   })
// })
//
// describe('#getAllMemos', () => {
//   it('it should return all list of memos in databases', (done) => {
//     chai.request('http://localhost:3000')
//       .get('/api/memos')
//       .end((err, res) => {
//         res.should.have.status(200)
//         done()
//       })
//   })
// })
//
// describe('#addNewMemo', () => {
//   it('it should add new memo', (done) => {
//     chai.request('http://localhost:3000')
//       .post('/api/memos')
//       .send({
//         "content" : "content from testing 1"
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.should.be.json;
//         // console.log(res.body.content);
//         res.body.content.should.equal("content from testing 1")
//         done()
//       })
//   })
// })

// describe('#updateAMemo', () => {
//   /*
//     * will update the value data of index in database
//     * change the res.body index to test
//     * make sure there's data in database on specific index
//   */
//   let index = 0
//   it('it should update a specific memo', (done) => {
//     chai.request('http://localhost:3000')
//       .get('/api/memos')
//       .end((err, res) => {
//         // console.log(res.body[0]._id);
//         chai.request('http://localhost:3000')
//           .put('/api/memos/'+res.body[index]._id)
//           .send({
//             "content" : "new content from testing"
//           })
//           .end((err, respond) => {
//             // console.log(respond.body);
//             respond.should.have.status(200);
//             respond.should.be.json;
//             respond.body.content.should.equal("new content from testing")
//             done()
//           })
//       })
//   })
// })

describe('#deleteAMemo', () => {
  /*
    * will delete the value data of index in database
    * change the res.body index to test
    * make sure there's data in database on specific index
  */
  let index = 0
  it('it should delete a specific memo from database', (done) => {
    chai.request('http://localhost:3000')
      .get('/api/memos')
      .end((err, res) => {
        console.log(res.body[index].content);
        chai.request('http://localhost:3000')
          .delete('/api/memos/'+res.body[index]._id)
          .end((err, del_res) => {
            del_res.should.have.status(200);
            del_res.should.be.json;
            del_res.body.content.should.equal(res.body[index].content)
            done()
          })
      })
  })
})
