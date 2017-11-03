const Cucumber = require("cucumber");
const { BeforeAll, After, Status } = require("cucumber");
const conf = require("../config/config").config;

    //{timeout: -1} para remover o timeout
    BeforeAll({timeout: 10*1000}, function() {
      return browser.get(conf.baseUrl);
    });
  
    After(function(scenario) {
      if (scenario.result.status === Status.FAILED) {
        const attach = this.attach;
        return browser.takeScreenshot().then(function(png) {
          const decodedImage = new Buffer(png, "base64");
          return attach(decodedImage, "image/png");
        });
      }
    });


