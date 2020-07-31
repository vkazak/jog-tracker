import React, { useState } from 'react';
import './header.css';

function MenuItem(props) {
    
    return(
        <a className="nav-item" href={props.link}>
            {props.title} 
        </a>
    )
}

export function Header(props) {
    const [menuOpened, setMenuOpened] = useState(false);

    const menuItems = [
        { title: 'jogs', link: '/jogs' },
        { title: 'info', link: '/info' },
        { title: 'contact us', link: '/contact_us' }
    ];

    let headerClass = 'header'; 
    let navContainerClass = 'nav-container';
    let logoClass = 'logo';
    let menuButtonClass = 'menu-button';
    let buttonIconClass = 'fa fa-bars';
    if (menuOpened) {
        headerClass += ' header-on-menu-opened';
        navContainerClass += ' nav-container-on-menu-opened';
        logoClass += ' logo-on-menu-opened';
        menuButtonClass += ' menu-button-on-menu-opened';
        buttonIconClass = 'fa fa-close';
    }

    return (
        <div className={headerClass}>
            <img className={logoClass} alt='Logo' />
            <div className={navContainerClass}> 
                <div className='nav-items-box'>
                    { menuItems.map(item => <MenuItem {...item}/>) }
                </div>
            </div>
            <button className={menuButtonClass} onClick={ () => setMenuOpened(!menuOpened) }>
                <i className={buttonIconClass}></i>
            </button>
        </div>
    )
}