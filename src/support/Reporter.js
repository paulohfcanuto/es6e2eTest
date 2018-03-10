const fs = require("fs");
const mkdirp = require("mkdirp");
const reporter = require("cucumber-html-reporter");

class Reporter {

	static createDirectory(dirName) {
		if (!fs.existsSync(dirName)) {
      mkdirp.sync(dirName);
		}
	}

	static createHTMLReport(cucumberReporteroptions) {
		try {
			reporter.generate(cucumberReporteroptions);
		} catch (err) {
				console.log(err);
			}
		}
	}

module.exports = Reporter;
