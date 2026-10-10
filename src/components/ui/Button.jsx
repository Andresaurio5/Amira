import React from 'react';
import './Button.css';

export default function Button({ txt, cls, onClic, tit }) {
    return (
        <button
            className={`btn-custom ${cls || ''}`}
            onClick={onClic}
            title={tit || txt}
        >
            {txt}
        </button>
    );
}