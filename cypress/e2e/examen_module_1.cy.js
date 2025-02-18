describe('Practica para el modulo 1 del curso', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com');
  })
  it('Tarea 3 -> Visitar la pagina de Youtube', () => {
      cy.title().should('eq','YouTube')
  });
  it('Tarea 4 -> Pruebas de Formulario', () => {
    cy.get('h5').contain('Elements').click();
    cy.get('li').eq(0).click();
    cy.get('#userName').type('Cesar Villagran Gutierrez');
    cy.get('#userEmail').type('correo@correo.com');
    cy.get('#currentAddress').type('Colonio arbolitos xalostoc'); 
    cy.get('#submit').click();
    cy.get('.border').should('be.visible');
  });
  it('Tarea 4.1 -> Pruebas de Formulario', () => {
    cy.get('h5').contain('Elements').click();
    cy.get('li').eq(0).click();
    cy.get('#userName').type('Cesar Villagran Gutierrez');
    cy.get('#userEmail').type('asd')
    cy.get('#currentAddress').type('Colonio arbolitos xalostoc'); 
    cy.get('#submit').click();
    cy.get('#userEmail').should('have.css', 'border-color', 'rgb(255, 0, 0)')
  });
  it('Tarea 5 -> Pruebas de Interaccion', () => {
    cy.visit('https://demoqa.com/buttons');
    cy.url('https://demoqa.com/buttons').should('eq','https://demoqa.com/buttons');
  });
  it('Tarea 5.1 -> Pruebas de Interaccion.', () => {
    cy.get('h5').contain('Elements').click();
    cy.get('li').eq(4).click();
    cy.get('#doubleClickBtn').dblclick()
    cy.get('p').should('contain.text', 'You have done a double click');
  });
  it('Tarea 5.2 -> Pruebas de Interaccion', () => {
    cy.get('h5').contain('Elements').click();
    cy.get('li').eq(4).click();
    cy.get('#rightClickBtn').rightclick();
    cy.get('p').should('contain.text','You have done a right click');
  });
  it('Tarea 6 Pruebas de aserciones', () => {
    cy.visit('https://demoqa.com/dynamic-properties');
    cy.url('https://demoqa.com/dynamic-properties').should('eq','https://demoqa.com/dynamic-properties')
  });
  it('Tarea 6.1 Pruebas de aserciones', () => {
    cy.visit('https://demoqa.com/dynamic-properties');
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-8')
    cy.get('li').eq(8).click();
    cy.wait(6000)
    cy.get('#visibleAfter').should('be.visible')
  });
  it('Tarea 6.2 Pruebas de aserciones', () => {
    cy.visit('https://demoqa.com/dynamic-properties');
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-8');
    cy.get('li').eq(8).click();
    cy.wait(6000)
    cy.get('#enableAfter').click().should('have.css', 'border-color', 'rgb(227, 227, 227)');
  });
  it('Tarea 6.3 Pruebas de aserciones', () => {
    cy.visit('https://demoqa.com/dynamic-properties');
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-8');
    cy.get('li').eq(8).click();
    cy.wait(6000)
    cy.get('#colorChange').click().should('have.css', 'color');
  });
})