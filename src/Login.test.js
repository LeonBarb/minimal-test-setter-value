import {act, render, screen} from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import DummyLogin from './DummyLogin';

describe('LoginFunction', () => {
  function renderDummyComponent() {
    render(<DummyLogin />);
  }

  describe('when filled and submitted', () => {
    describe('when login succeeded', () => {
      it('Dummy-Test, finding textfield', () => {
        renderDummyComponent();
        expect(
          screen.getByPlaceholderText('Enter Username'),
        ).toBeInTheDocument();
      });

      it('Dummy-Test, typing in the textfield', async () => {
        await renderDummyComponent();

        await userEvent.type(screen.getByTestId('dummyfield'), 'TestName');

        screen.debug(screen.getByTestId('dummyfield'));

        expect(screen.getByText('TestName')).toBeInTheDocument();
      });
    });
  });
});
