export interface State {
    price: Price;
    buySell: string;
    investmentCcy: string;
    ccyPair: CurrencyPair;
    amount: string;
}

interface Price {
    [key: string]: TradeDetails;
}

interface TradeDetails {
    ccyPair: CurrencyPair;
    ask: string;
    bid: string;
}

export interface CurrencyPair {
    ccy1: string;
    ccy2: string;
}

export enum Currency {
    EUR = "EUR",
    USD = "USD",
    CHF = "CHF"
}

export enum BuySell {
    BUY = "BUY",
    SELL = "SELL"
}

export enum TradeConfirmationMessage {
    BOUGHT = "Bought",
    SOLD = "Sold"
}