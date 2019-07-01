var request = require('supertest');

describe('Server', function(){
  var server;
  beforeEach(function(){
    server = require('../index.js');
  })
  afterEach(function(){
    server.close();
  })
  
  it('responds to / with status code 200', function(done){
    request(server)
    .get('/')
    .expect(200, done);
  })

  
});