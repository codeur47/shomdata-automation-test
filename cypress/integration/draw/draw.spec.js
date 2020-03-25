describe('Should draw with shom Drawing tools', function() {
    
    beforeEach(() =>{
        cy.visit('https://data.shom.fr/');
        cy.viewport(1360, 635);
        cy.wait(5000);
        cy.get('div.btn:nth-child(5) > div:nth-child(1)').click();
        cy.get('.btn-block').click();
    });

    it('should draw a label',  () => {
        cy.get('#drawing-add-text-button').click();
        cy.get('#map-container').click(600,280);

        cy.get('#feature-text').click();
        cy.wait(5000);
        cy.get('#feature-text').clear().type('Maldive');

        cy.get('#text-font-arial').click();
        cy.get('fieldset.drawing-feature-style:nth-child(3) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > label:nth-child(2)').click();

        cy.get('#text-size').click();
        cy.wait(5000);
        cy.get('#text-size').clear().type('50');

        cy.get('input.btn').click();

        cy.get('#feature-text').should('have.value', 'Maldive');
        cy.get('#text-size').should('have.value', '50');

        cy.get('#drawing-action-print-button').click();

        PrintPopUp('Label for test','Add a Label for testing');

    });

    it('should add a point', function () {

        cy.get('#drawing-add-marker-button').click();
        cy.get('#map-container').click(600,280);
        cy.get('input.btn').click();

        cy.get('#drawing-action-print-button').click();

        PrintPopUp('Point for test','Add a point for testing');

    });

    it('should draw a line', function () {

        cy.get('#drawing-add-line-button').click();
        cy.get('#map-container').click(600,280);
        cy.get('#map-container').click(600,350);
        cy.get('#map-container').click(500,350);
        cy.get('#map-container').dblclick(500,380);

        cy.get('#stroke-thickness').click();
        cy.wait(2000);
        cy.get('#stroke-thickness').clear().type('10');

        cy.get('input.btn').click();

        cy.get('#drawing-action-print-button').click();

        PrintPopUp('Line for test','Add a line for testing');

    });

    it('should draw a polygon', function () {

        cy.get('#drawing-add-polygon-button').click();
        cy.get('#map-container').click(600,280);
        cy.get('#map-container').click(600,350);
        cy.get('#map-container').click(500,350);
        cy.get('#map-container').dblclick(500,380);

        cy.get('#stroke-thickness').click();
        cy.wait(2000);
        cy.get('#stroke-thickness').clear().type('10');

        cy.get('input.btn').click();

        cy.get('#drawing-action-print-button').click();

        PrintPopUp('Polygon for test','Add a polygon for testing');
    });

    it('should draw a circle', function () {

        cy.get('#drawing-add-circle-button').click();
        cy.get('#map-container').click(600,280);
        cy.get('#map-container').dblclick(500,350);

        cy.get('#stroke-thickness').click();
        cy.wait(2000);
        cy.get('#stroke-thickness').clear().type('10');

        cy.get('input.btn').click();

        cy.get('#drawing-action-print-button').click();

        PrintPopUp('Circle for test','Add a circle for testing');
    });
});

function PrintPopUp(name, description){
    cy.get('#map-name-print').click();
    cy.wait(2000);
    cy.get('#map-name-print').clear().type(name);

    cy.get('#map-description-print').click();
    cy.wait(2000);
    cy.get('#map-description-print').clear().type(description);
    cy.get('.print-map-button').click();
}
