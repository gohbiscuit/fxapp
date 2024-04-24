# FX Spot Challenge

## Prerequisites

- Node 14 or later and npm 6 or later
- Strong knowledge of JavaScript, Typescript, React and its concepts

Please take your time to read this file carefully until the end before starting the task.

## Setup
cd to `fx-app`

1. Run `npm install`
2. Run `npm start`
3. Open http://localhost:3000 in your web browser and take a moment to study what you see.

## Running Tests
cd to `fx-app`

1. Run `npm run test`

## FX Spot Description

What you see in the web browser resembles a simplified FX (Foreign Exchange) trade capture form. You may skip the next section if you are familiar with FX entry forms.

**Example Scenario**

Someone from Germany travelling to the USA requires US Dollars (USD) and decides to trade them against Euros (EUR). In other words, USD are bought with EUR. The exchange rate ([EUR/USD](https://www.google.ch/search?q=eur+usd)) is ever changing. The trade capture form allows one to pick a currency pair and see the price feed for that currency pair. For simplicity the price feed in this exercise uses a clients side fake data generator (usually it is an external api). There are two rates, the [bid and ask](https://www.investopedia.com/terms/b/bid-and-ask.asp).

**Bid** is the price which the buyer, usually a bank, is willing to pay for one unit of the first currency. It is the lower value. So for EUR/USD, the rate of 1.1550 means that the bank will pay 1.1550 USD for every EUR given.

**Ask** is the price which the seller, usually a bank, is willing to take for one unit of the first currency. It is the higher value. So for EUR/USD, the rate of 1.590 means that the bank will ask for 1.1590 USD for ever EUR received.

**Spread** is the difference between Ask and Bid. A high spread means the bank makes more money and a low spread is better for the customer.

The trade button in this simplified trade capture form will display a confirmation message with the trade action. In a real FX trading application, the amounts would be booked off or onto the client's bank account.


## Goal

The goal of this exercise is to have the FX Spot application use React and written in Typescript instead of JavaScript.

The focus is on the source code. We do not expect you to change or improve the ui design. 
We also do not want the functionality to change unless you find something to improve.

### Requirements

1. Create a new React app with Typescript. For instructions, please see https://create-react-app.dev/docs/adding-typescript/#installation.
2. Convert the source to React using Typescript and make use of React and Typescript features to improve the code.
3. Think about a suitable shape for the application state.
4. Find a state solution that *does not* require additional dependencies (Typescript and React only).
5. Extract repeating blocks of TSX (Typescript JSX) into reusable components. 
6. Add tests.


## Time Constraint

We allow **one work day** for the task and expect completion within 4 hours. We expect a reply within 24 hours upon receiving the email.


## Returning The Result

1. Make sure all source changes are included.
2. Exclude any file that is listed in .gitignore to reduce the size.
3. Zip the directory and send it to the email address you received the assignment from.

**IMPORTANT**: If the repository contains any .js or .exe file it will be deleted by email security checks. Since the exercise is to be completed in Typescript this should not be problem, but if for some reason there are *.js files, we ask you kindly to use https://wetransfer.com/ to send us the result.

Good luck!