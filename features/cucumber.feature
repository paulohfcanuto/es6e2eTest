Feature: To search cucumber in google

    @CucumberScenario
    Scenario: Cucumber Google
      Given I am on allure page with title "allure reports - Pesquisa Google"
      When I type "cucumber" on search textbox "#lst-ib"
      Then I click search button
      Then I clear search textbox "#lst-ib"
