'use strict';
var conf = require('../conf.js');	

var ControlButtonPage = function () {

};
	
ControlButtonPage.prototype = Object.create({}, {
    //Left panel buttons
    addform:  { get: function() { return element(by.css("#step1")); }},
    addstate: { get: function() { return element(by.css("#step4")); }}, 
    searchbox: { get: function() { return element(by.css("#search_control")); }}, 

    //Center-Main panel buttons
    savebutton: { get: function() { return element(by.xpath("//span[contains(text(), 'Save')]")); }},
    closebutton: { get: function() { return element(by.xpath("//span[contains(text(), 'Close')]")); }},
    statusbutton: { get: function() { return element(by.xpath("//span[contains(text(), 'Status')]")); }},
    printbutton: { get: function() { return element(by.xpath("//span[contains(text(), 'Print')]")); }},
    efilebutton: { get: function() { return element(by.xpath("//div[@id='step5']/button[1]")); }},
    toolsbutton: { get: function() { return element(by.xpath("//div[@id='step9']/button[1]")); }},
    addnewformbutton: { get: function() { return element(by.xpath("//span[contains(text(), 'Add New Form')]")); }},
    taxbookbutton: { get: function() { return element(by.xpath("//span[contains(text(), 'TaxBook')]")); }},

    //Right panel buttons
    openreturnbutton: { get: function() { return element(by.xpath("//button[contains(text(), 'Open Return')]")); }}
});

module.exports = ControlButtonPage;