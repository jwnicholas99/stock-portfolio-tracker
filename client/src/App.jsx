import React from 'react';

import Transaction from './Components/Transaction';
import Stock from './Components/Stock';

function App() {
    // const [stocks, setStocks] = useState([]);
    const transactions = [
        {
            id: 1,
            date: '15 Jan 2021',
            ticker: 'RBLX',
            units: 5.0,
            price: 70,
            fees: 0.35,
        },
        {
            id: 2,
            date: '18 Jan 2021',
            ticker: 'APPL',
            units: 5.0,
            price: 200,
            fees: 0.35,
        },
        {
            id: 3,
            date: '29 Feb 2021',
            ticker: 'RBLX',
            units: 3.0,
            price: 68,
            fees: 0.35,
        },
        {
            id: 4,
            date: '7 Mar 2021',
            ticker: 'APPL',
            units: 8.0,
            price: 215,
            fees: 0.35,
        },
    ];

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

    return (
        <div>
            <h2>Stock Portfolio Tracker</h2>
            <h3>Transactions</h3>
            <table>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Stock Ticker</th>
                        <th>Price</th>
                        <th>Units</th>
                        <th>Total Cost</th>
                    </tr>

                    {transactions.map(({ id, date, ticker, price, units }) => (
                        <Transaction
                          key={id}
                          date={date}
                          ticker={ticker}
                          price={price}
                          units={units}
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
