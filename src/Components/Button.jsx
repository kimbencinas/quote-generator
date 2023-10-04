import React from 'react'

export default function Button({ getQuote }) {
        return (
            <div className="button">
                <button onClick={getQuote}>Get Quote</button>
            </div>
        );
    }