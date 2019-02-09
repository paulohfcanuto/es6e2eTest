const Reporter = require("./../support/Reporter");
const rootDir  = process.cwd();

/**
 * a Variável configLocation é utilizada para informar o hooks "src\support\hooks.js"
 * a localização do config correto que foi chamado no script npm
 */
process.env.configLocation = __filename;


const reportLocation = {
  htmlReport: `${rootDir}/reports/google/search/html/google_search.html`,
  htmlDir: `${rootDir}/reports/google/search/html/`,
  jsonReport: `${rootDir}/reports/google/search/json/cucumber_report.json`,
  jsonDir: `${rootDir}/reports/google/search/json/`
};

/**
 * parâmetros para criação do relatório de execução com base no json gerado pelo cucumber
 * @type {{theme: string, jsonFile: string, output: string, reportSuiteAsScenarios: boolean}}
 */
const cucumberReporteroptions = {
  theme: "bootstrap",
  jsonFile: reportLocation.jsonReport,
  output: reportLocation.htmlReport,
  reportSuiteAsScenarios: true
};


exports.config = {
  ignoreUncaughtExceptions: true,
  //seleniumAddress: "http://localhost:4444/wd/hub",
  seleniumAddress: "http://selenium__standalone-chrome:4444/wd/hub/",
  baseUrl: "https://www.google.com/ncr",
  capabilities: {
    browserName: 'chrome',
      chromeOptions: {
        args: ['--headless', '--disable-gpu', '--window-size=1440,900', '--disable-infobars', 'disable-extensions', 'start-maximized']
      }
  },
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),
  specs: [`${rootDir}/src/features/google.search.feature`],
  cucumberOpts: {
    strict: true,
    format: [
      `json:${reportLocation.jsonReport}`,
      'node_modules/cucumber-pretty'
    ],
    require: [
      `${rootDir}/src/stepdefinitions/google.search.step.js`,
      `${rootDir}/src/support/hooks.js`
    ],
    tags: "(@test and not @Outline)"
  },
  onPrepare: function() {
    browser.waitForAngularEnabled(false);
    browser.manage().window().maximize();
    Reporter.createDirectory(reportLocation.htmlDir);
    Reporter.createDirectory(reportLocation.jsonDir);
    require('babel-register');
  },
  onComplete: function () {
    Reporter.createHTMLReport(cucumberReporteroptions);
  }
};
