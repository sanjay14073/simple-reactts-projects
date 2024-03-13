import React from 'react';
import { CurrencyDetails } from '../App';

const Card: React.FC<CurrencyDetails> = (props) => {
    return (
        <div className="card" style={cardStyle}>
            <div className="card-body">
                <h2 className="card-title">{props.currency_name}</h2>
                <h4 className="card-text">{props.price}</h4>
            </div>
        </div>
    );
};

const cardStyle: React.CSSProperties = {
    backgroundColor: '#f4f4f4',
    color: '#333',
    padding: '10px',
    margin: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center'
};

export default Card;
