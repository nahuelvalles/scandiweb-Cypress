
/// <reference types="cypress" />
import HomePage from "./homePage.js";
import productData from "../fixtures/productData.json"

const homePage = new HomePage();

class ProductPage{

    searchForProduct(){

        this.getProductData()
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

    getProductData(){
        const validProduct = productData.products
        return {
            product: Cypress.env('product') || validProduct   
        }
    }

}

export default ProductPage;