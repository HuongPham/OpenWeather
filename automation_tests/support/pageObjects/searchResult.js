class searchResult{
    searchForm(){
        return cy.get('#searchform').find('input[id="search_str"]');
    }
    searchButton(){
        return cy.get('#searchform>button');
    }
    resultTable(){
        return cy.get('#forecast_list_ul>table>tbody');
    }
    resultRow(i){
        cy.get('#forecast_list_ul').find('tr').then($els => {
            return cy.wrap($els[{ i }]);
        })
    }
    headline(){
        return cy.get('.wrapper').find('h2');
    }
    firstResultLink() {
        return cy.get('#forecast_list_ul').find('a').first();
    }
}
export default searchResult