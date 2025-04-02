import { Texts, Product1, ProductInf, ContainerNamePrice, Social, Menu } from "../elements/InventoryElements";

class InventoryPages {

    InventoryStandardUser(){
        cy.url().should('include', '/inventory.html');
        cy.get(Product1.titleProduct).click()


    }

}

export default new InventoryPages()