import React from "react";
import { deepEqual, getCcyKey } from "../utils";
import { Currency, CurrencyPair } from "../types";

describe('deepEqual tests', () => {
    it("should return true for objects or types that are deepEqual", () => {
        const obj1 = {a: "1", b:"2", c:"3 "};
        const obj2 = {a: "1", b:"2", c:"3 "};
        expect(deepEqual(obj1, obj2)).toEqual(true);
    });

    it("should return false for objects that are not deepEqual", () => {
        const obj1 = {a: "1", b:"2", c:"3 "};
        const obj2 = {a: "1", b:"2", c:"456 "};
        expect(deepEqual(obj1, obj2)).toEqual(false);
    });
});

describe('getCcyKey tests', () => {
    it("should return a string of the passed in currency pair in lower case", () => {
        const currencyPair: CurrencyPair = {
            ccy1: Currency.CHF,
            ccy2: Currency.USD
        };
        expect(getCcyKey(currencyPair)).toEqual("chfusd");

        const currencyPair2: CurrencyPair = {
            ccy1: Currency.EUR,
            ccy2: Currency.USD
        };
        expect(getCcyKey(currencyPair2)).toEqual("eurusd");
    });
});