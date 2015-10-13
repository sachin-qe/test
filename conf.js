var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var JasmineXmlReporter = require('jasmine-reporters');

exports.config = {
	framework: 'jasmine2',
  	seleniumAddress: 'http://localhost:4444/wd/hub',
  	specs: ['specs/Login.js', 
            'specs/Dashboard.js',
            'specs/NewFileLodge.js'
           ],
	// baseUrl: 'http://app.advanced-taxsolutions.com/#/login',
  
	
    onPrepare: function() {
        global.isAngularSite = function(flag){ browser.ignoreSynchronization = !flag; };
        browser.driver.manage().window().maximize();
        // browser.get(baseUrl);

        var folderName = (new Date()).toString().split(' ').splice(1, 4).join(' ');
        // var mkdirp = require('mkdirp');
        var newFolder = "./reports/" + folderName;

        
        // mkdirp(newFolder, function(err) {
        //   if (err) {
        //     console.error(err);
        //   } else {
        //     jasmine.getEnv().addReporter(new jasmine.JasmineXmlReporter(newFolder, true, true,'./nosetests.xslt'));
        //   }
        // });

        // // var JasmineXmlReporter = require();
        // jasmine.getEnv().addReporter(new jasmine.ConsoleReporter(console.log));
        
        

        // var ConsoleReporter = jasmineRequire.ConsoleReporter();
        // var options = {
        //    timer: new jasmine.Timer, 
        //    print: function () {
        //       console.log.apply(console,arguments)
        // }};
        // consoleReporter = new ConsoleReporter(options); // initialize ConsoleReporter
        // jasmine.getEnv().addReporter(consoleReporter);



        var today = new Date(),
        timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';

        // jasmine.getEnv().addReporter(new jasmine.JasmineXmlReporter(newFolder, true, true,'./nosetests.xslt'));

        // var result = "results_ " + new Date.getTime().toString();
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({savePath: 'reports/screenshots/' + timeStamp }));
    },

    capabilities: {
      	browserName: 'firefox',
      	// version: '41',
      	// platform: 'Linux'
    },


    onComplete: function() {
        browser.quit();
    },


// afterEach(function () {
//     var passed = jasmine.getEnv().currentSpec.results().passed();
//     // Replace all space characters in spec name with dashes
//     var specName = jasmine.getEnv().currentSpec.description.replace(new RegExp(' ', 'g'), '-'),
//         baseFileName = specName + '-' + getDateStr(),
//         reportDir = path.resolve(__dirname + '/../report/'),
//         consoleLogsDir = path.resolve(reportDir + '/logs/'),
//         screenshotsDir = path.resolve(reportDir + '/screenshots/');

//     if (!fs.existsSync(reportDir)) {
//         fs.mkdirSync(reportDir);
//     }

//     if (!passed) {
//         // Create screenshots dir if doesn't exist
//         console.log('screenshotsDir = [' + screenshotsDir + ']');
//         if (!fs.existsSync(screenshotsDir)) {
//             fs.mkdirSync(screenshotsDir);
//         }

//         var pngFileName = path.resolve(screenshotsDir + '/' + baseFileName + '.png');
//         browser.takeScreenshot().then(function (png) {
//             // Do something with the png...
//             console.log('Writing file ' + pngFileName);
//             fs.writeFileSync(pngFileName, png, {encoding: 'base64'}, function (err) {
//                 console.log(err);
//             });
//         }, errorCallback);
//     },


    //Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
       	onComplete: null,
        isVerbose: false,
        // realtimeFailure: true,
        showColors: true,
        includeStackTrace: true
    }

};