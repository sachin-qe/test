'use strict';

var LoginPage = require('../pages/LoginPage.js');	

// var util = require('util');

describe('MyTaxPrep Login Fuctionality', function() {

 	var page;

	beforeAll(function () {
  		isAngularSite(true);
  		page = new LoginPage();
	});

	// afterAll(function () {
	// 	browser.quit();
	// });

	it('User should be able to login', function() {
		// page.insertsearchtext("testing");
		// page.searchbutton.click();
		// expect(page.result.isDisplayed()).toBe(true);
    	page.insertusername("sachin.parmar@i-link.co.in");
    	page.insertpassword("Admin@123");
	 	page.loginbutton.click();
	 	browser.waitForAngular(); 
	 	page.okbutton.click();
		// browser.waitForAngular(); 
		browser.driver.sleep(5000);
	    expect(browser.getCurrentUrl()).toEqual("http://app.advanced-taxsolutions.com/#/home");
	}); // it ends here

	// it("testing sample", function(myarg){
	// 	browser.refresh();
	// 	browser.get("www.google.com");
	// });// it ends here

}); // describe ends here