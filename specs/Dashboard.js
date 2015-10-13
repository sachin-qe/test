'use strict';

var DashboardPage = require('../pages/DashboardPage.js');	

// var util = require('util');

describe('MyTaxPrep Dashboard file lodge Fuctionality', function() {

 	var page = new DashboardPage();

	beforeAll(function () {
  		isAngularSite(true);
  		// page = new DashboardPage();
	});

	// afterAll(function () {
	// 	browser.quit();
	// });

	it('User should be able to return a new file', function() {
		// page.insertsearchtext("testing");
		// page.searchbutton.click();
		// expect(page.result.isDisplayed()).toBe(true);
    	page.newreturnButton.click();
    	// browser.waitForAngular(); 
		// browser.driver.sleep(5000);
	    expect(browser.getCurrentUrl()).toEqual("http://app.advanced-taxsolutions.com/#/return/new");
	}); // it ends here

	// it("testing sample", function(myarg){
	// 	browser.refresh();
	// 	browser.get("www.google.com");
	// });// it ends here

}); // describe ends here