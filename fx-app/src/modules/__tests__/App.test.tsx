import React from 'react';
import { render, screen, waitFor, within, fireEvent, getByLabelText } from '@testing-library/react';
import App from '../../App';
import userEvent from "@testing-library/user-event";

jest.setTimeout(30000);

describe('deepEqual tests', () => {
    it('should renders the appropriate elements in the page', () => {
        render(<App />);
        expect(screen.getByText(/FX SPOT/i)).toBeInTheDocument();

        expect(screen.getByText(/Currency Pair/i)).toBeInTheDocument();
        expect(screen.getByTestId('currency-dropdown')).toBeInTheDocument();

        expect(screen.getByText(/Bid/i)).toBeInTheDocument();
        expect(screen.getByText(/Ask/i)).toBeInTheDocument();

        expect(screen.getByText(/Amount/i)).toBeInTheDocument();

        expect(screen.getByText(/Buy/i)).toBeInTheDocument();
        expect(screen.getByText(/Sell/i)).toBeInTheDocument();

        expect(screen.getByTestId('trade-button')).toBeInTheDocument();
    });

    it('should allow a buy trade to be placed and display appropriate message according to the currency selected', async () => {
        render(<App />);
        await new Promise((r) => setTimeout(r, 2000));
        const dropdownElement = screen.getByTestId('currency-dropdown');
        userEvent.selectOptions(dropdownElement, ["usd,chf"]);
        const tradeButton = screen.getByTestId('trade-button');
        expect(tradeButton).toBeEnabled();
        userEvent.click(tradeButton);
        expect(screen.getByText(/Bought 1000 USD for/i)).toBeInTheDocument();
    });

    it('should allow a sell trade to be placed and display appropriate message according to the currency selected', async () => {
        render(<App />);
        await new Promise((r) => setTimeout(r, 2000));
        const dropdownElement = screen.getByTestId('currency-dropdown');
        userEvent.selectOptions(dropdownElement, ["eur,usd"]);

        const labelRadio: HTMLInputElement = screen.getByLabelText('Sell');
        expect(labelRadio.checked).toEqual(false);
        userEvent.click(labelRadio);
        expect(labelRadio.checked).toEqual(true);

        const tradeButton = screen.getByTestId('trade-button');
        expect(tradeButton).toBeEnabled();
        userEvent.click(tradeButton);
        expect(screen.getByText(/Sold 1000 EUR for/i)).toBeInTheDocument();
    });

    it('should disable the trade button when no currency is selected', async () => {
        render(<App />);
        await new Promise((r) => setTimeout(r, 2000));
        const dropdownElement = screen.getByTestId('currency-dropdown');
        userEvent.selectOptions(dropdownElement, [""]);

        const tradeButton = screen.getByTestId('trade-button');
        expect(tradeButton).toBeDisabled();
    });
});