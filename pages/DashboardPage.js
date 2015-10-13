'use strict';
var conf = require('../conf.js');	

var DashboardPage = function () {
    // browser.get("http://app.advanced-taxsolutions.com/#/login");
    // browser.waitForAngular(); 
    // browser.driver.sleep(5000);
};
	
DashboardPage.prototype = Object.create({}, {
    newreturnButton: { get: function () { return element(by.xpath("//span[@id='step2']/span")); }},
    // newreturnButtonclick: { value: function () { this.newreturnButton.click(); }},
});

module.exports = DashboardPage;