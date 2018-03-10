Feature: Google search

  @test
  Scenario: Google search cucumber
    Given I am on google page with title "Google"
    When I type cucumber
    Then I click search button
    Then I clear search textbox




  @Outline
  Scenario Outline: Google search cucumber and protractor
    Given I am on google page with title <pageTitle>
    When I type <search>
    Then I click search button
    Then I clear search textbox

    Examples:
      | pageTitle                | search     |
      | Google                   | cucumber   |
      | cucumber - Google Search | protractor |
