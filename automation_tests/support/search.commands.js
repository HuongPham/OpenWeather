import SearchResult from './pageObjects/searchResult';
import routes from './constants/api.js';
import TopMenu from './pageObjects/topMenu';


const topMenu = new TopMenu();
const searchResult = new SearchResult();


Cypress.Commands.add("searchFromTopMenu", (keyword,searchedCity) => {
  topMenu.searchBox().type(keyword).then(($el) => {
      var stubUrl = routes.find.toString()
      cy.intercept({method: 'GET', url: stubUrl}).as('findWeather')
      console.log(stubUrl)
      cy.wrap($el).type('{enter}').then(() =>{
        cy.stubbingSearchAPI(searchedCity);
      })
  });
})

Cypress.Commands.add("searchNewOne", (city) => {
  searchResult.searchButton().click().then(() => {
    cy.stubbingSearchAPI(city)
  })
})
Cypress.Commands.add("stubbingSearchAPI", (searchedCity) => {
  cy.wait('@findWeather').should(({ request, response }) => {
    if (searchedCity != "") {expect(response.body).to.include(searchedCity)}
    expect(response.body).to.include('"cod":"200"')
  })
})
Cypress.Commands.add("navigateWeatherDetailPage", (row) => {
  cy.intercept('GET', routes.onecall).as('dt')
  searchResult.firstResultLink().should('have.attr','href')
  searchResult.firstResultLink().click().then(() =>{
    cy.wait('@onecall').its('response.statusCode').should('eq', 200);
  });
})
Cypress.Commands.add("verify8DaysForecast", () => {
  cy.get('.day-list > li').then((rows) => {
    expect(rows.length).to.equal(8)
  })
})
Cypress.Commands.add("verifySearchResult", () => {
  searchResult.headline().contains('Weather in your city');
  searchResult.resultTable().should('exist');
})
Cypress.Commands.add("verifyCityNameAndFlag", (searchedCity,flagImg,row) => {
  cy.get('#forecast_list_ul').find('tr').first().find('td').then($els => {
      cy.wrap($els[1]).contains(searchedCity);
      //cy.wrap($els[1]).find('img').should('have.attr','src', flagImg);
      cy.wrap($els[1]).find('img').invoke('attr', 'src').should('eq',flagImg)
      // then((src) => {
      //   expect(src).to.be(flagImg)
      // });
  })
})