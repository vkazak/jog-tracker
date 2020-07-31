import React from 'react';
import './index.css';

export function LogInView(props) {

    return (
        <div className='container'>
            <div className='outer-rectangle'>
                <div className='content-col'>
                    <img className='bear-image' alt='Bear face' />
                    <button className='button'> Let me in </button> 
                </div>
            </div>
        </div>
    )
}