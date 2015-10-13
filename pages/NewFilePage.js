'use strict';
var conf = require('../conf.js');	

var NewFilePage = function () {
    // browser.get("http://app.advanced-taxsolutions.com/#/login");
    // browser.waitForAngular(); 
    // browser.driver.sleep(5000);
};

NewFilePage.prototype = Object.create({}, {
    returntype: { get: function() {return element(by.css("div[id='step1'] button")); }},
    ssn: { get: function () { return element(by.css("div[id='step2'] input")); }},
    firstname: { get: function () { return element(by.css("input[ng-required*='firstName']")); }},
    lastname: { get: function () { return element(by.css("input[ng-required*='lastName']")); }},
    continuebutton: { get: function() { return element(by.css("#step5")); }},

    insertssn: { value: function (keys) { return this.ssn.sendKeys(keys); }},
    insertfirstname: { value: function (keys) { return this.firstname.sendKeys(keys); }},
    insertlastname: { value: function (keys) { return this.lastname.sendKeys(keys); }}

    // okbutton: { get: function () { return element(by.xpath("//input[@translate='LOGIN_YES_BTN']")).getText(); }},
    // searchtext: { get: function () { return element(by.xpath("//input[@id='gs_htif0']")); }},
    // searchbutton:{ get: function() { return element(by.xpath("//input[@value='Google Search']")); }},
    // result: { get: function () { return element(by.xpath("//div[@id='center_col']")); }},
    // insertsearchtext: { value: function (keys) { return this.searchtext.sendKeys(keys); }}
});

module.exports = NewFilePage;