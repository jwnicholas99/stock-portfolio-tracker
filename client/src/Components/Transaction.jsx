import React from 'react';
import PropTypes from 'prop-types';

const Transaction = ({ date, ticker, price, units }) => (
    <tr>
        <td>{date}</td>
        <td>{ticker}</td>
        <td>{price}</td>
        <td>{units}</td>
        <td>{price * units}</td>
    </tr>
);

Transaction.propTypes = {
    date: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    units: PropTypes.number.isRequired,
};

export default Transaction;
