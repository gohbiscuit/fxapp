import { fxRateSubscriber } from "./fxRateSubscriber";
import { stateService } from "./stateService";
import { createTradeConfirmMessage } from "./createTradeConfirmationMessage";
import { getCcyKey } from "./utils";
import { State } from "./types";

export const main = (root: any) => {
  const { setState, getState, addListener } = stateService({
    ccyPair: { ccy1: "EUR", ccy2: "USD" },
    price: {},
    buySell: "BUY",
    investmentCcy: "EUR",
    amount: "1000",
  });

  const { subscribe, unsubscribe } = fxRateSubscriber({
    onReceive: (price) => setState({ price }),
  });

  const onStateChange = (state: State, update: any) => {
    const hasPrice = () => state.ccyPair && Object.keys(state.price).length;
    const canTrade = () =>
      hasPrice() &&
      state.buySell &&
      state.amount.trim() !== "" &&
      !isNaN(Number(state.amount));

    if (Object.prototype.hasOwnProperty.call(update, "ccyPair")) {
      if (state.ccyPair && state.ccyPair.ccy1 && state.ccyPair.ccy2) {
        subscribe();
      } else {
        unsubscribe();
      }
    }

    if (hasPrice()) {
      const ccyKey = getCcyKey(state.ccyPair);
      root.querySelector(".bid").textContent = state.price[ccyKey].bid;
      root.querySelector(".ask").textContent = state.price[ccyKey].ask;
      root.querySelector(".ccy1-label").textContent = state.ccyPair.ccy1;
      root.querySelector(".ccy2-label").textContent = state.ccyPair.ccy2;
      root.querySelectorAll(".investment-ccy [type=radio]")[0].value =
        state.ccyPair.ccy1;
      root.querySelectorAll(".investment-ccy [type=radio]")[1].value =
        state.ccyPair.ccy2;
      root.querySelector(".investment-ccy").style.display = "block";
    } else {
      root.querySelector(".bid").textContent = "";
      root.querySelector(".ask").textContent = "";
      root.querySelector(".ccy1-label").textContent = "";
      root.querySelector(".ccy2-label").textContent = "";
      root.querySelector(".investment-ccy").style.display = "none";
    }

    if (
      Object.keys(update).includes("ccyPair") &&
      update.ccyPair !== undefined
    ) {
      root.querySelector(
        "select.select-currency-pair"
      ).value = `${update.ccyPair.ccy1.toLowerCase()},${update.ccyPair.ccy2.toLowerCase()}`;
    }

    if (Object.keys(update).includes("buySell")) {
      root.querySelector("input[name=buySell][value=BUY]").checked =
        update.buySell === "BUY";
      root.querySelector("input[name=buySell][value=SELL]").checked =
        update.buySell === "SELL";
    }

    if (Object.keys(update).includes("amount")) {
      root.querySelector("input[name=amount]").value = update.amount || "";
    }

    if (Object.keys(update).includes("ccyPair")) {
      root.querySelector("div.confirmation").textContent = "";
      root.querySelector("div.confirmation").style.display = "none";
    }

    root.querySelector("button.trade").disabled = !canTrade();
  };

  addListener((newState: any, update: any) => onStateChange(newState, update));

  root.addEventListener("change", (event: any) => {
    if (event.target.classList.contains("select-currency-pair")) {
      if (event.target.value === "") {
        setState({ ccyPair: undefined });
      } else {
        const [ccy1, ccy2] = event.target.value.split(",");
        setState({ ccyPair: { ccy1, ccy2 }, investmentCcy: ccy1 });
      }
      return;
    }

    if (event.target.name === "buySell") {
      setState({ buySell: event.target.value });
      return;
    }

    if (event.target.name === "investmentCcy") {
      setState({ investmentCcy: event.target.value });
    }
  });

  root.addEventListener("keyup", (event: any) => {
    if (event.target.name === "amount") {
      setState({ amount: event.target.value });
    }
  });

  //React.MouseEvent<HTMLElement>
  root.addEventListener("click", (event: any) => {
    if (event.target.classList.contains("trade")) {
      root.querySelector("div.confirmation").textContent =
        createTradeConfirmMessage(getState());
      root.querySelector("div.confirmation").style.display = "block";
    }
  });
}
