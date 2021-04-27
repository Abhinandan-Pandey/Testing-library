import React from 'react';
import { render, cleanup, fireEvent, screen } from '@testing-library/react';
import TestElements from './TestElements'
import "@testing-library/jest-dom/extend-expect";


it("should be equal to zero", () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId("counter")).toHaveTextContent(0);
});
it("should be enable", () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId("button-up")).not.toHaveAttribute("disabled");
})
it("submit should be disabled", () => {
    const { getByTestId, getByText } = render(<TestElements />);
    expect(getByTestId("button-down")).not.toBeDisabled();
    expect(getByText("submit")).toBeDisabled()
})
it('increments counter', () => {
    const { getByTestId } = render(<TestElements />);

    fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('counter')).toHaveTextContent('1')
});

it('decrements counter', () => {
    const { getByTestId } = render(<TestElements />);

    fireEvent.click(getByTestId('button-down'))

    expect(getByTestId('counter')).toHaveTextContent('-1')
});