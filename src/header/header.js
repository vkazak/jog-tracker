import React from 'react';
import './header.css';
import logo from './logo.png';

export function Header(props) {
    return (
        <div className="header">
            <img className="logo" src={logo} alt='Logo' />
        </div>
    )
}