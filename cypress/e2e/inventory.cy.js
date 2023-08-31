describe('Produto no carrinho', () => {

    it("Adicionar Produto no Carrinho", () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get("button[class='btn_primary btn_inventory']")
            .contains('ADD TO CART')
            .click()
        cy.contains('span[class*=shopping_cart_badge]', '1').should('be.visible')

    })

    it("Adicionar dois Produto no carrinho", () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get("button[class='btn_primary btn_inventory']")
            .contains('ADD TO CART')
            .click()
        cy.get(".inventory_item").contains('Sauce Labs Bike Light')
            .parent()
            .siblings()
            .children("button[class='btn_primary btn_inventory']")
            .click()
        cy.contains('span[class*=shopping_cart_badge]', '2').should('be.visible')




    })


    it.only("Remover um produto adicionado", () => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get(".inventory_item").contains('Sauce Labs Fleece Jacket')
            .parent()
            .siblings()
            .children("button[class='btn_primary btn_inventory']")
            .click()
            .click()
        cy.get("button[class='btn_primary btn_inventory']")
            .contains('ADD TO CART').should('be.visible')

    })

    




})