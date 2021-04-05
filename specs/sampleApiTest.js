let Request = require("request");
let fs = require('fs');
let requests = require('../methods/api/requests');
let headersWithAuth = {"content-type": "application/json", "Authorization": "Basic YWRtaW46cEA1NXcwN2Q="}
let headersNoAuth = {"content-type": "application/json"}
let baseEndPoint = "http://localhost:8080/countries"

describe("API Endpoints Tests",function(){

  it("User Has Able To Reset List Of Countries Data", function (done) {
    Request.get({
      "url": baseEndPoint+"/reset",
      "headers": headersWithAuth,
      },
      function (error, response) {
        if(error) {
          return console.dir(error);
        }
        expect(response.statusCode).toBe(204);
        done();
      }
    );
  });

  it("User Has Able To Fetch List Of Countries Without Authorization", function (done) {
    Request.get({
      "url": baseEndPoint+"?order=asc",
      "headers": headersNoAuth,
      },
      function (error, response, body) {
        if(error) {
            return console.dir(error);
        }
        expect(response.statusCode).toBe(200);
        if (response.statusCode === 200) {
          fs.writeFileSync('responseBody.json', body);
          let bodyInfo = require('../responseBody.json')
          let firstItem = bodyInfo[0]['name'];
          expect(firstItem).toBe('AFGHANISTAN');
        }
        done();
      }
    );
  });

  it("User Has Able To Fetch List Of Countries With Authorization", function (done) {
    Request.get({
      "url": baseEndPoint+"?order=asc",
      "headers": headersWithAuth,
      },
      function (error, response, body) {
        if(error) {
            return console.dir(error);
        }
        expect(response.statusCode).toBe(200);
        if (response.statusCode === 200) {
          fs.writeFileSync('responseBody.json', body);
          let bodyInfo = require('../responseBody.json')
          let firstItem = bodyInfo[0]['name'];
          expect(firstItem).toBe('AFGHANISTAN');
        }
        done();
      }
    );
  });

  it("User Has Able To Updated A PHILIPPINES Country Population", function (done) {
    Request.patch({
      "url": baseEndPoint+"/phi",
      "headers": headersWithAuth,
      "body": JSON.stringify({"name":"PHILIPPINES", "population":100})
      },
      function (error, response, body) {
        if(error) {
            return console.dir(error);
        }
        expect(response.statusCode).toBe(202);
        if (response.statusCode === 202) {
          fs.writeFileSync('responseBody.json', body);
          delete require.cache[require.resolve('../responseBody.json')]
          let bodyInfo = require('../responseBody.json')
          expect(bodyInfo['name']).toBe('PHILIPPINES');
          expect(bodyInfo['code']).toBe('phi');
          expect(bodyInfo['population']).toBe(100);
        }
        done();
    });

  });

  it("User Has Fetch List Of Countries Sorted Order-Asc By Population After Update - Last PHILIPPINES", function (done) {
    Request.get({
      "url": baseEndPoint+"?order=asc",
      "headers": headersWithAuth
    },
    function (error, response, body) {
        if (error) {
          return console.dir(error);
        }
        if (response.statusCode === 200) {
          fs.writeFileSync('responseBody.json', body);
          delete require.cache[require.resolve('../responseBody.json')]
          let bodyInfo = require('../responseBody.json');
          expect(bodyInfo[bodyInfo.length-1]['name']).toBe('PHILIPPINES');
        }
        done();
      }
    );

  });

  it("User Has Fetch List Of Countries Sorted Order-Desc By Population After Update - First PHILIPPINES", function (done) {
    Request.get({
      "url": baseEndPoint+"?order=desc",
      "headers": headersWithAuth
    },
    function (error, response, body) {
        if (error) {
          return console.dir(error);
        }
        if (response.statusCode === 200) {
          fs.writeFileSync('responseBody.json', body);
          delete require.cache[require.resolve('../responseBody.json')]
          let bodyInfo = require('../responseBody.json');
          expect(bodyInfo[0]['name']).toBe('PHILIPPINES');
        }
        done();
      }
    );

  });

  it("User Has Able To Delete Country", function (done) {
    Request.delete({
      "url": baseEndPoint+"/phi",
      "headers": headersWithAuth,
      },
      function (error, response) {
        if(error) {
          return console.dir(error);
        }
        expect(response.statusCode).toBe(204);
        done();
      }
    );
  });


  



});
