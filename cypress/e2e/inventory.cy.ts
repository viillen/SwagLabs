import InventoryPages from "../support/pages/InventoryPage";

describe('', () => {
    beforeEach(() => {
        cy.login('standard_user', 'secret_sauce');
        cy.url().should('include', '/inventory.html');
    })

    it('Inventory standard user', () => {
        InventoryPages.InventoryStandardUser()
        })
}) 