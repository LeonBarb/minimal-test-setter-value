import DummyLogin from '../../src/DummyLogin';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('visit DummyLogin', () => {
  it('finds the Login TextField', async () => {
    await cy.visit('/');
    //cy.get('#dummyfield').type('neuerUser');
    //cy.get('#dummyfield').should('contain.value', 'neuerUser');
    cy.get('#dummyfield').click().type('neuerUser').should('have.value', 'neuerUser');
  });
});
