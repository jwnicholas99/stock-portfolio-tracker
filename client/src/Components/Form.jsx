import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ addTransaction }) => {
    const [newDate, setNewDate] = useState('');
    const [newTicker, setNewTicker] = useState('');
    const [newUnits, setNewUnits] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newFees, setNewFees] = useState('');

    const handleAddTransaction = (event) => {
        event.preventDefault();
        addTransaction({
            date: newDate,
            ticker: newTicker,
            units: parseFloat(newUnits),
            price: parseFloat(newPrice),
            fees: parseFloat(newFees),
        });
    };

    const handleDateChange = (event) => {
        setNewDate(event.target.value);
    };

    const handleTickerChange = (event) => {
        setNewTicker(event.target.value);
    };

    const handleUnitsChange = (event) => {
        setNewUnits(event.target.value);
    };

    const handlePriceChange = (event) => {
        setNewPrice(event.target.value);
    };

    const handleFeesChange = (event) => {
        setNewFees(event.target.value);
    };

    return (
        <form onSubmit={handleAddTransaction}>
            <div>
                Date:
                <input value={newDate} onChange={handleDateChange} />
            </div>
            <div>
                Ticker:
                <input value={newTicker} onChange={handleTickerChange} />
            </div>
            <div>
                Units:
                <input value={newUnits} onChange={handleUnitsChange} />
            </div>
            <div>
                Price:
                <input value={newPrice} onChange={handlePriceChange} />
            </div>
            <div>
                Fees:
                <input value={newFees} onChange={handleFeesChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};

Form.propTypes = {
    addTransaction: PropTypes.func.isRequired,
};

export default Form;
