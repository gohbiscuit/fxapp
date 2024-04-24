# FX Spot Challenge

## Prerequisites

- Node 14 or later and npm 6 or later
- JavaScript, Typescript, React and its concepts

## Setup

1. Run `npm install`
2. Run `npm start`
3. Open http://localhost:1234 in your web browser and take a moment to study what you see.

## FX Spot Description

What you see in the web browser resembles a simplified FX (Foreign Exchange) trade capture form. You may skip the next section if you are familiar with FX entry forms.

**Example Scenario**

Someone from Germany travelling to the USA requires US Dollars (USD) and decides to trade them against Euros (EUR). In other words, USD are bought with EUR. The exchange rate ([EUR/USD](https://www.google.ch/search?q=eur+usd)) is ever changing. The trade capture form allows one to pick a currency pair and see the price feed for that currency pair. For simplicity the price feed in this exercise uses a clients side fake data generator (usually it is an external api). There are two rates, the [bid and ask](https://www.investopedia.com/terms/b/bid-and-ask.asp).

**Bid** is the price which the buyer, usually a bank, is willing to pay for one unit of the first currency. It is the lower value. So for EUR/USD, the rate of 1.1550 means that the bank will pay 1.1550 USD for every EUR given.

**Ask** is the price which the seller, usually a bank, is willing to take for one unit of the first currency. It is the higher value. So for EUR/USD, the rate of 1.590 means that the bank will ask for 1.1590 USD for ever EUR received.

**Spread** is the difference between Ask and Bid. A high spread means the bank makes more money and a low spread is better for the customer.

The trade button in this simplified trade capture form will display a confirmation message with the trade action. In a real FX trading application, the amounts would be booked off or onto the client's bank account.