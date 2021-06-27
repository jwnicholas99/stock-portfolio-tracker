import React from 'react';
import PropTypes from 'prop-types';

const Transaction = ({ id, date, ticker, price, units, fees, deleteTransaction }) => {
    const handleDeleteTransaction = () => {
        deleteTransaction(id);
    };

    return (
        <tr>
            <td>{date}</td>
            <td>{ticker}</td>
            <td>{price}</td>
            <td>{units}</td>
            <td>{fees}</td>
            <td>{price * units + fees}</td>
            <td>
                <button type="button" onClick={handleDeleteTransaction}>X</button>
            </td>
        </tr>

    );
};

Transaction.propTypes = {
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    units: PropTypes.number.isRequired,
    fees: PropTypes.number.isRequired,
    deleteTransaction: PropTypes.func.isRequired,
};

export default Transaction;
