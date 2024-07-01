/// <reference types="cypress" />
import homePage from "./homePage.js"

class ProductPage{

    searchForProduct(product){

        const homePage = new homePage();
        homePage.getSearchInput().type(product)
        
    }
}

export default ProductPage;