import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import SearchResult from '../../support/pageObjects/searchResult';

const searchResult = new SearchResult();

var new_city = "";
var new_country = "";

beforeEach(() => {
    cy.loadingHomePage()
})
When('I fill-in my {string} with country code to search box on top menu and press Enter',(city) => {
    cy.searchFromTopMenu(city,"")
})
Then('I can see the weather in my city',() =>{
    cy.verifySearchResult()
}) 
And('City {string} and {string} flag is displayed correctly',(cityName,country) => {
    cy.fixture('countryFlags.json').then((flagImgs) => {
        let countryFlag = flagImgs[country]
        cy.verifyCityNameAndFlag(cityName,countryFlag,1)
    })
})
Given('I searched weather in the {string} city from top menu', (city) =>{
    cy.searchFromTopMenu(city,city)
})
When('I fill-in another city with country code to search box in the search result page', datatable => {
    datatable.hashes().forEach(row => {
        searchResult.searchForm().clear().type(row.keyword)
        new_city = row.city;
        new_country = row.country;
    });
}) 
And('I press search button',() => {
    cy.searchNewOne(new_city)
}) 
Then('I can see weather in that city',() => {
    cy.fixture('countryFlags.json').then(flagImgs => {
        cy.verifyCityNameAndFlag(new_city,flagImgs[new_country],1)
        cy.verifySearchResult()
    })

}) 
When('I click the city name link on the search result page', () => {
    cy.navigateWeatherDetailPage(1)
}) 
Then('I can see 8 days weather forecast of my city', () => {
    cy.verify8DaysForecast()
}) 
