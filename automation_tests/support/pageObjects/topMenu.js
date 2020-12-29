class topMenu{
    searchBox(){
        return cy.get('#nav-search-form').find('input[placeholder="Weather in your city"]');
    }
}
export default topMenu