describe('navigation example', () => {
    it('read json file and navigate to url from the file', () => {
        cy.readFile('cypress/fixtures/publicainf.json').then(content =>{  
            cy.wrap(content).as("publicainf")
            
        })
        
        cy.get("@publicainf").then(publisContent => {
            cy.log(publisContent["url"])
            cy.visit(publisContent["url"])
            cy.get('.btn-primary').click() 
            cy.get('#login-username').type(publisContent["email"])
            cy.get('#login-password').type(publisContent["senha"])  
            cy.get('#login-form > .btn').click()  
            cy.get(':nth-child(3) > .list-inline > .button-group > button').click()
            cy.get(':nth-child(3) > .list-inline > .button-group > .dropdown-menu > .header-list > :nth-child(1) > a').click() 
            cy.get('.story-title').type(publisContent["titulo"])
            cy.get('.story-description').click().type(publisContent["descricao"])
            cy.get('.character-input').click().type(publisContent["personagem1"])
            cy.get('.character > .btn > .fa').click()
            cy.get(':nth-child(2) > .character-input').click().type(publisContent["personagem2"])
            cy.get('.characters > :nth-child(2) > .btn').click()
            cy.get(':nth-child(3) > .character-input').click().type(publisContent["personagem3"])
            cy.get('#categoryselect').select('11').should('have.value','11')
            cy.get('#target-audience').select('13-18').should('have.value','13-18')
            cy.get('#select-form-component').select('2').should('have.value','2')
            cy.get('.actions > .btn-orange').click()
            cy.get('#story-title').clear()
            cy.get('#story-title').type(publisContent["capitulo1"])
            cy.get('.story-editor').type(publisContent["texto1"])
            cy.get('.button-container > .btn').click()
            cy.wait(10000)
            cy.scrollTo('bottom').wait(0)
            cy.get('#acknowledge-checkbox').click()


            //cy.get('.actions > .btn-orange').click()
      })
    })
})