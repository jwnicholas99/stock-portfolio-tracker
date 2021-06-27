import React, { useState, useEffect } from 'react';

import Transaction from './Components/Transaction';
import Stock from './Components/Stock';
import Form from './Components/Form';

import transactionService from './Services/transactions';

function App() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        transactionService
            .getAll()
            .then((initialTransactions) => setTransactions(initialTransactions));
    });

    let stocks = {};
    transactions.forEach(({
        ticker, units, price, fees,
    }) => {
        if (!(ticker in stocks)) {
            stocks = {
                ...stocks,
                [ticker]: {
                    units,
                    price: 100,
                    cost: units * price + fees,
                },
            };
        } else {
            const { units: curUnits, cost: curCost } = stocks[ticker];
            stocks = {
                ...stocks,
                [ticker]: {
                    units: curUnits + units,
                    price: 100,
                    cost: curCost + units * price + fees,
                },
            };
        }
    });

    let stockArr = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [k, v] of Object.entries(stocks)) {
        stockArr = stockArr.concat({ ...v, ticker: k });
    }

    const addTransaction = (transaction) => {
        transactionService.create(transaction);
    };

    const deleteTransaction = (id) => {
        transactionService.remove(id);
    };

    return (
        <div>
            <h2>Stock Portfolio Tracker</h2>
            <h3>Add Your Transactions</h3>
            <Form addTransaction={addTransaction} />
            <h3>Transactions</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Stock Ticker</th>
                        <th>Price</th>
                        <th>Units</th>
                        <th>Fees</th>
                        <th>Total Cost</th>
                        <th>Delete</th>
                    </tr>

                    {transactions.map(({ id, date, ticker, price, units, fees }) => (
                        <Transaction
                          key={id}
                          id={id}
                          date={date}
                          ticker={ticker}
                          price={price}
                          units={units}
                          fees={fees}
                          deleteTransaction={deleteTransaction}
                        />
                ))}
                </tbody>
            </table>

            <h3>Portfolio</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Stock Ticker</th>
                        <th>Yahoo Price</th>
                        <th>Units</th>
                        <th>Cost</th>
                        <th>Cost Per Unit</th>
                        <th>Unrealized Gain/Loss</th>
                    </tr>

                    {stockArr.map((stock) => (
                        <Stock
                          key={stock.ticker}
                          ticker={stock.ticker}
                          price={stock.price}
                          units={stock.units}
                          cost={stock.cost}
                        />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
