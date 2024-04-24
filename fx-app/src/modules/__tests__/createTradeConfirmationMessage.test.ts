import { createTradeConfirmMessage } from "../createTradeConfirmationMessage";
import { State } from "../types";

describe('createTradeConfirmMessage tests', () => {
    it("should return appropriate trade confirmation message for the following currencies", () => {
        const state: State = {
            "ccyPair": {
                "ccy1": "EUR",
                "ccy2": "USD"
            },
            "price": {
                "eurusd": {
                    "ccyPair": {
                        "ccy1": "EUR",
                        "ccy2": "USD"
                    },
                    "ask": "1.16521",
                    "bid": "1.16509"
                },
                "eurchf": {
                    "ccyPair": {
                        "ccy1": "EUR",
                        "ccy2": "CHF"
                    },
                    "ask": "1.09395",
                    "bid": "1.09389"
                },
                "usdchf": {
                    "ccyPair": {
                        "ccy1": "USD",
                        "ccy2": "CHF"
                    },
                    "ask": "0.93696", "bid": "0.93686"
                }
            },
            "buySell": "BUY", "investmentCcy": "EUR", "amount": "1000"
        }
        expect(createTradeConfirmMessage(state)).toEqual("Bought 1000 EUR for 1165.09 USD");
    });
});