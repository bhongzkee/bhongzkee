"use strict"
let EC = protractor.ExpectedConditions;

let actions = function () {
  browser.ignoreSynchronization = true;
  browser.manage().timeouts().implicitlyWait(0);

  this.navigatesTo = function (url) {
    browser.get(url);
    browser.wait(EC.urlContains(url), 60000, 'The URL "' + url + '"was NOT Loaded');
  }

};
module.exports = new actions();

