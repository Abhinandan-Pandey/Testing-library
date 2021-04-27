import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import TestApi from './TestApi'

it('increments counter after 0.5s', async () => {
    const { getByTestId, getByText } = render(<TestApi />);

    fireEvent.click(getByTestId('button-up'))

    const counter = await waitFor(() => getByText('1'))

    expect(counter).toHaveTextContent('1')
});