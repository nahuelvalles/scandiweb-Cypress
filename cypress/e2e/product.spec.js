import ProductPage from "../page-objects/productPage"
const productPage = new ProductPage()

describe('Product page functionalities', () => {

    it.only('Validates the search functionality works', function(){

        cy.visit("/")
        productPage.searchForProduct("hoodie")
        productPage.getProductLinkSubString("hoodie")
    })
   
})