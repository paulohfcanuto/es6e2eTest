import GoogleSearch from '../pages/GoogleSearch';
import Globals from '../support/Globals';
import { browser } from 'protractor';
import { defineSupportCode } from "cucumber";

// Chai
const globals = new Globals();
const expect = globals.expect;

const googleSearch = new GoogleSearch();

defineSupportCode(({ When, Then }) => {
  When(/^I type "(.*?)" on search textbox "([^"]*)"$/, (text, searchTextBox) => {
      googleSearch.setSearchTextBox(searchTextBox);
      return googleSearch.searchTextBox.sendKeys(text);
  });

  Then(/^I click search button$/, () => {
      return browser.actions().sendKeys(protractor.Key.ENTER).perform();
  });
});