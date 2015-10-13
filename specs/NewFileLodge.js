'use strict';

var NewFilePage = require('../pages/NewFilePage.js');	

// var util = require('util');

describe('MyTaxPrep Dashboard file lodge Fuctionality', function() {

 	var page = new NewFilePage();

	beforeAll(function () {
  		isAngularSite(true);
  		// page = new NewFilePage();
	});

	// afterAll(function () {
	// 	browser.quit();
	// });

	it('User should be able to return a new file', function() {
		// page.insertsearchtext("testing");
		// page.searchbutton.click();
		// expect(page.result.isDisplayed()).toBe(true);
		var ssn_no, userfname, userlname;

		ssn_no = Math.floor((Math.random() * 1000000000) + 1); 
		userfname = 'tuser_' + ssn_no; 
		userlname = 'tuserlastname_' + ssn_no;

    	page.insertssn(ssn_no);
    	page.insertfirstname(userfname) ; 
    	page.insertlastname(userlname); 
    	page.continuebutton.click();
		browser.driver.sleep(5000);
	    expect(browser.getCurrentUrl()).toContain("http://app.advanced-taxsolutions.com/#/return/edit");
	}); // it ends here

	// it("testing sample", function(myarg){
	// 	browser.refresh();
	// 	browser.get("www.google.com");
	// });// it ends here

}); // describe ends here