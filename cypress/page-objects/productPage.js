/*
## Scenario 2: Product Search
- **Description**: Verify the product search functionality.
- **Steps**:
  1. Navigate to the homepage.
  2. Enter a product name in the search bar.
  3. Click the search button.
  4. Verify that the search results are displayed correctly.
  5. Verify that the listed products match the search term.
*/

/// <reference types="cypress" />
import HomePage from "./homePage.js";

const homePage = new HomePage();

class ProductPage{

    searchForProduct(product){

        homePage.getSearchInput().type(product)
        cy.get('[type=submit][title="Search"]').click()
        
    }

    //It validates that the href of the products that are shown in the page
    //after searching for a particular word, contain that word searched
    getProductLinkSubString(product){
        cy.get('.product-item-link')
        .each(($el => {
            cy.wrap($el).should('have.attr', 'href')
            .and('include', product)
        }))
    }
}

export default ProductPage;