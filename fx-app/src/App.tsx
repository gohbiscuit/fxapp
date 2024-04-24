import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { main } from './modules/main';

function App() {
  const ref = useRef(null);

  useEffect(() => {
    const app = ref.current;
    main(app);
  }, []);
  
  return (
    <div id="app" ref={ref}>
      <div>
        <h1>FX SPOT</h1>
        <div className="row">
          <label
            >Currency Pair
            <select className="select-currency-pair" data-testid="currency-dropdown">
              <option value="">No currency selected</option>
              <option value="eur,usd">EUR / USD</option>
              <option value="eur,chf">EUR / CHF</option>
              <option value="usd,chf">USD / CHF</option>
            </select>
          </label>
        </div>
        <div className="ticker row">
          <div className="left">
            <div className="label">Bid</div>
            <div className="bid spot"></div>
          </div>
          <div className="right">
            <div className="label">Ask</div>
            <div className="ask spot"></div>
          </div>
        </div>
        <div className="row">
          <label>
            <input type="radio" value="BUY" name="buySell" data-testid="buy-radiobtn" checked /> 
            Buy 
          </label>
          <label>
            <input type="radio" value="SELL" name="buySell" data-testid="sell-radiobtn" /> 
            Sell 
            </label>
        </div>
        <div className="investment-ccy row" style={{"display": "none"}}>
          <label
            ><input type="radio" value="" name="investmentCcy" checked /><span
            className="ccy1-label"
            ></span
          ></label>
          <label
            ><input type="radio" value="" name="investmentCcy" /><span
            className="ccy2-label"
            ></span
          ></label>
        </div>
        <div className="row">
          <label>Amount <input name="amount" placeholder="Example: 1000" /></label>
        </div>
        <div className="row">
          <button className="trade" disabled data-testid="trade-button">Trade</button>
        </div>

        <div
          className="confirmation"
          style={{"display": "none", "border": "solid 2px green", "padding": "4px", "backgroundColor": "LightGreen"}}
          data-test-id="confirmation-message"
        ></div>
      </div>
    </div>
  );
}

export default App;
