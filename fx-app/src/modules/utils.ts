import { CurrencyPair } from "./types";

export const getCcyKey = (currency: CurrencyPair) => {
  return `${currency.ccy1.toLowerCase()}${currency.ccy2.toLowerCase()}`;
}

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

// Simple deepEqual
// Source: https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality
export const deepEqual = (object1: any, object2: any) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
}

const isObject = (object: any) => {
  return object != null && typeof object === "object";
}
