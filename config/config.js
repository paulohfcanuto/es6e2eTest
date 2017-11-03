const path = require("path");
const jsonReports = process.cwd() + "/reports/json";
const Reporter = require("../support/reporter");

exports.config = {
  seleniumAddress: "http://localhost:4444/wd/hub",
  baseUrl: "https://www.google.com.br",
  capabilities: {
    browserName: process.env.TEST_BROWSER_NAME || "chrome"
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: ["../features/*.feature"],
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    require('babel-register');
    Reporter.createDirectory(jsonReports);
    //browser.debugger();
  },
  cucumberOpts: {
    strict: true,
    format: 'json:./reports/json/cucumber_report.json',
    require: ["../stepDefinitions/*.js", "../support/*.js"],
    tags: "(@AllureScenario or @CucumberScenario or @ProtractorScenario)"
  },
  onComplete: function () {
    Reporter.createHTMLReport();
  }
};
