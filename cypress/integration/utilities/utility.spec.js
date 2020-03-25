describe('Should interate with ui components on welcome page', function() {

    before(() => {
        cy.visit('https://data.shom.fr/');
        cy.viewport(1360, 635);
    });

    it('Does close the information pop up', function() {
        cy.get('#toast-container > div > button')
            .click();
        cy.get('#toast-container > div').should('not.exist');
    });

    it('Does close the cookies pop up', function() {
        cy.get('.cc-btn')
            .click();
        cy.get('.cc-window').should('have.class', 'cc-invisible');
    });

    it('Does move the map to north', function() {
        cy.get('div.pan:nth-child(1)')
            .dblclick();

    });

    it('Does move the map to west', function() {
        cy.get('div.pan:nth-child(2)')
            .dblclick();

    });

    it('Does move the map to south', function() {
        cy.get('div.pan:nth-child(3)')
            .dblclick();

    });

    it('Does move the map to east', function() {
        cy.get('div.pan:nth-child(4)')
            .dblclick();

    });

    it('Does zoomIn the map', function() {
        cy.get('div.zoom:nth-child(5)')
            .dblclick();

    });

    it('Does zoomOut the map', function() {
        cy.get('div.zoom:nth-child(6)')
            .dblclick();

    });


});
