Feature: To search allure reports in google

    @AllureScenario
    Scenario: Allure Reports Google
      Given I am on google page with title "Google"
      When I type "allure reports" on search textbox "#lst-ib"
      Then I click search button
      Then I clear search textbox "#lst-ib"
