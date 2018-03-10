import GoogleSearch from '../pages/GoogleSearch';
import { browser } from 'protractor';
import { Given, When, Then } from 'cucumber';


// chai
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

// Elemento de tela
const googleSearch = new GoogleSearch();


Given(/^I am on google page with title "([^"]*)"$/, (title) => {
  expect(browser.getTitle()).to.eventually.equal(title);
});

When(/^I type cucumber/, () => {
  return googleSearch.searchTextBox.sendKeys("cucumber");
});

Then(/^I click search button$/, () => {
  return browser.actions().sendKeys(protractor.Key.ENTER).perform();
});

Then(/^I clear search textbox$/, () => {
  return googleSearch.searchTextBox.clear();
});
