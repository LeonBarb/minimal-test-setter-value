import {mount} from 'cypress/react';
import DummyLogin from '../../src/DummyLogin';
import {screen} from '@testing-library/react';


describe('Login.cy.js', () => {
  it('playground', async () => {
    await mount(<DummyLogin />);
    cy.get('#dummyfield').click().type('neuerUser').should('have.value', 'neuerUser');
  });
});
