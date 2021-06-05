import React from 'react';
import PropTypes from 'prop-types';

const Stock = ({ ticker, price, units, cost }) => (
    <tr>
        <td>{ticker}</td>
        <td>{price}</td>
        <td>{units}</td>
        <td>{cost}</td>
        <td>{cost / units}</td>
        <td>{price * units - cost}</td>
    </tr>
);

Stock.propTypes = {
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    units: PropTypes.number.isRequired,
    cost: PropTypes.number.isRequired,
};

export default Stock;
