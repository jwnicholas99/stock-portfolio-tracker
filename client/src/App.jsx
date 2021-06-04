import React from 'react';

function App() {
    // const [stocks, setStocks] = useState([]);
    const transactions = [
        {
            date: '15 Jan 2021',
            ticker: 'RBLX',
            units: 5.0,
            price: 70,
            fees: 0.35,
        },
        {
            date: '18 Jan 2021',
            ticker: 'APPL',
            units: 5.0,
            price: 200,
            fees: 0.35,
        },
        {
            date: '29 Feb 2021',
            ticker: 'RBLX',
            units: 3.0,
            price: 68,
            fees: 0.35,
        },
        {
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
                <tr>
                    <th>Date</th>
                    <th>Stock Ticker</th>
                    <th>Price</th>
                    <th>Units</th>
                    <th>Total Cost</th>
                </tr>

                {transactions.map((transaction) => (
                    <tr>
                        <td>{transaction.date}</td>
                        <td>{transaction.ticker}</td>
                        <td>{transaction.price}</td>
                        <td>{transaction.units}</td>
                        <td>{transaction.price * transaction.units}</td>
                    </tr>
                ))}
            </table>

            <h3>Portfolio</h3>
            <table>
                <tr>
                    <th>Stock Ticker</th>
                    <th>Yahoo Price</th>
                    <th>Units</th>
                    <th>Cost</th>
                    <th>Cost Per Unit</th>
                    <th>Unrealized Gain/Loss</th>
                </tr>

                {stockArr.map((stock) => (
                    <tr>
                        <td>{stock.ticker}</td>
                        <td>{stock.price}</td>
                        <td>{stock.units}</td>
                        <td>{stock.cost}</td>
                        <td>{stock.cost / stock.units}</td>
                        <td>{stock.price * stock.units - stock.cost}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default App;
