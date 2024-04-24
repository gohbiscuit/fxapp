import { getCcyKey } from "./utils";
import { BuySell, TradeConfirmationMessage, State } from "./types";

export const createTradeConfirmMessage = (state: State | any) => {
  return `${state.buySell === BuySell.BUY ? TradeConfirmationMessage.BOUGHT : TradeConfirmationMessage.SOLD} ${
    state.amount
    } ${state.investmentCcy.toUpperCase()} for ${
    getCounterRate(state) * Number(state.amount)
    } ${getCounterCcy(state).toUpperCase()}`;
}

const getBidAsk = (state: State) => {
  const ccyKey = getCcyKey(state.ccyPair);
  return state.price[ccyKey];
}

const getCounterCcy = (state: State) => {
  return state.investmentCcy === state.ccyPair.ccy1
    ? state.ccyPair.ccy2
    : state.ccyPair.ccy1;
}

const getCounterRate = (state: State) => {
  if (state.buySell === BuySell.BUY) {
    if (state.investmentCcy === state.ccyPair.ccy1) {
      return Number(getBidAsk(state).bid);
    } else {
      return 1 / Number(getBidAsk(state).bid);
    }
  } else {
    if (state.investmentCcy === state.ccyPair.ccy1) {
      return Number(getBidAsk(state).ask);
    } else {
      return 1 / Number(getBidAsk(state).ask);
    }
  }
}

