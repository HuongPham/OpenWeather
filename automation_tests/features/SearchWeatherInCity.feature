Feature: Search weather in your city
Background: User opens OpenWeatherMap Application 

@SmokeTest  @Severity_High
Scenario Outline: User search weather in his city from top menu
    When I fill-in my "<city>" with country code to search box on top menu and press Enter
    Then I can see the weather in my city
    And City '<name>' and "<country>" flag is displayed correctly
Examples:      
        |city|name|country|
        |Ho Chi Minh, VN|Ho Chi Minh|vn|
        |Vienna,AT|Vienna|at|
        |Munich,  DE|Munich|de|
@SmokeTest  @Severity_Medium
Scenario: User search weather in another cities from search result page
    Given I searched weather in the 'Monster' city from top menu
    When I fill-in another city with country code to search box in the search result page
        |keyword|city|country|
        |glenWood, AU| Glenwood|au|
    And I press search button
    Then I can see weather in that city
@SmokeTest  @Severity_High
Scenario: User can see 8 days weather forecast of the searched city
    Given I searched weather in the "Floria" city from top menu
    When I click the city name link on the search result page
    Then I can see 8 days weather forecast of my city
