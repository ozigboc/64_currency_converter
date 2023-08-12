import React from "react";

const CurrencyInput = ({symbol, selectSymbol, amount, setAmount}) => (
    <div className="field">
        <div className="currency-picker">
            <select value={symbol} onChange={e => selectSymbol(e.target.value)}>
                <option>USD</option>
                <option>INR</option>
                <option>EUR</option>
                <option>SGD</option>
                <option>GBP</option>
                <option>CAD</option>
                <option>AUD</option>
                <option>CNY</option>
                <option>JPY</option>
                <option>NZD</option>
                <option>NGN</option>
            </select>


        </div>
        <div className="current-input">
            <input className="number-input" type="number" value={amount} onChange={e => setAmount(e.target.value)} />
        </div>
    </div>
);

export default CurrencyInput; 