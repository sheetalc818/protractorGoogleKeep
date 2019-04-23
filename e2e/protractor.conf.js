// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
//var HtmlReporter = require('protractor-html-screenshot-reporter');
// var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

// var reporter = new HtmlScreenshotReporter({
//   dest: 'target/screenshots',
//   filename: 'my-report.html'
// });



exports.config = 
{
  //  // Setup the report before any tests start
  //  beforeLaunch: function() {
  //   return new Promise(function(resolve){
  //     reporter.beforeLaunch(resolve);
  //   });
  // },

  // // Assign the test reporter to each running instance
  // onPrepare: function() {
  //   jasmine.getEnv().addReporter(reporter);
  // },

  // // Close the report after all tests finish
  // afterLaunch: function(exitCode) {
  //   return new Promise(function(resolve){
  //     reporter.afterLaunch(resolve.bind(this, exitCode));
  //   });
  // },

  allScriptsTimeout: 11000,
  seleniumAddress: 'http://localhost:4723/wd/hub',
  specs: ['./src/**/*.e2e-spec.ts'],

  capabilities: 
  {
        browserName: '',
        app:'com.google.android.keep',
        appPackage : 'com.google.android.keep',
        appActivity : 'com.google.android.keep.activities.BrowseActivity',
        deviceName: 'Pixel 2 API 26',
        platformName: 'Android',
        platformVersion: '8.0',
        udid: 'emulator-5554',
        autoWebview : true,
        autoWebviewTimeout: 50000, 
        autoAcceptAlerts: true
  },
  //directConnect: true,
  useAllAngular2AppRoots: true,
  baseUrl:'http://10.0.2.2:8000',
  framework: 'jasmine',
  
  jasmineNodeOpts: 
  {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },


  onPrepare() 
  {
    require('ts-node').register(
    {
      project: require('path').join(__dirname, './tsconfig.e2e.json'),
    });

    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

  //    // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
  //    jasmine.getEnv().addReporter(new HtmlReporter({
  //     baseDirectory: '/tmp/screenshots'
  //  }));

  //   var reporter = new HtmlReporter({
  //       baseDirectory: '/tmp/screenshots'
  //  });
    var wd = require('wd'),
    protractor = require('protractor'),
    wdBridge = require('wd-bridge')(protractor, wd);
    wdBridge.initFromProtractor(exports.config);
  }
};