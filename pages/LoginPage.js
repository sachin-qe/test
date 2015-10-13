'use strict';
var conf = require('../conf.js');	

var LoginPage = function () {
    browser.get("http://app.advanced-taxsolutions.com/#/login");
	// browser.waitForAngular(); 
    // browser.driver.sleep(5000);
};
	
LoginPage.prototype = Object.create({}, {
    username: { get: function () { return element(by.xpath("//div[contains(@class, 'login')]//input[contains(@data-ng-model,'loginForm.userName')]")); }},
    password: { get: function () { return element(by.xpath("//div[contains(@class, 'login')]//input[contains(@data-ng-model,'loginForm.password')]")); }},
    loginbutton: { get: function () { return element(by.css("input[value='Log In']")); }},
    okbutton: { get: function () { return element(by.xpath("//input[@translate='LOGIN_YES_BTN']")).getText(); }},
    insertusername: { value: function (keys) { return this.username.sendKeys(keys); }},
    insertpassword: { value: function (keys) { return this.password.sendKeys(keys); }}

    // searchtext: { get: function () { return element(by.xpath("//input[@id='gs_htif0']")); }},
    // searchbutton:{ get: function() { return element(by.xpath("//input[@value='Google Search']")); }},
    // result: { get: function () { return element(by.xpath("//div[@id='center_col']")); }},
    // insertsearchtext: { value: function (keys) { return this.searchtext.sendKeys(keys); }}
});

module.exports = LoginPage;