'use strict'
let Request = require("request");
let fs = require('fs');


let requests = function (done) {
    this.resetData = function (url, headers = {}, statusCode) {
        Request.get({
            "url": url,

            "headers": headers,
      
            }, (error, response) => {
              if(error) {
                  return console.dir(error);
              }
              // console.log("Response Code: "+response.statusCode)
              expect(response.statusCode).toBe(statusCode);
              done();
          });
    }



}
module.exports = new requests();