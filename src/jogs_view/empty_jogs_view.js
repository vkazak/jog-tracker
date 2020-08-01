import React from 'react';
import './empty_jogs_view.css';

export function EmptyJogsView(props) {
    return (
        <div className='empty-jogs-container'>
            <img className='sad-emoji' alt='Sad emoji' />
            <p className='empty-jogs-paragraph'>Nothing is there</p>
            <button className='create-jog-button'>Create your jog first</button>
        </div>
    )
}