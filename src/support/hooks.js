const { BeforeAll, After } = require("cucumber");
const conf = require(process.env.configLocation).config;


BeforeAll({timeout: -1}, function() {
  return browser.get(conf.baseUrl);
});

After(function() {
  /*const attach = this.attach;
  return browser.takeScreenshot().then(function(png) {
    const decodedImage = new Buffer(png, "base64");
    attach(decodedImage, "image/png");
  });*/
});
