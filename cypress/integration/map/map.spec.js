describe('Should interate with the map container', function() {

    before(() => {
        cy.visit('https://data.shom.fr/');
        cy.viewport(1360, 635);
    });

    it('Does get the map element', function() {
        cy.get('button.btn-block:nth-child(1)').click();
        cy.get('#oceano-tabs > a:nth-child(1)').click();
        cy.get('#oceano-data > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > h4:nth-child(1) > a:nth-child(1)').click();
        cy.get('#collapse-category-VAGUES > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)').click();
    });

});
