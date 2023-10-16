import React from 'react';

export default function Quotes({ quote }) {

    return (
        <div className="body">
            <h2 className="quote">{quote}</h2>
        </div>
    );
}