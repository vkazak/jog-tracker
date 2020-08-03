import React, { useState } from 'react';
import './header.css';
import { useHistory } from 'react-router-dom';

function MenuItem(props) {
    const goToPage = (event) => {
        event.preventDefault();
        props.setMenuOpened(false);
        props.setPathname(props.link);
        props.history.push(props.link);
    }
    let itemClass = 'nav-item';
    if (props.link === props.pathname) {
        itemClass += ' nav-item-active';
    }

    return(
        <a className={itemClass} href={props.link} onClick={goToPage}>
            {props.title} 
        </a>
    )
}

export function Header(props) {
    const history = useHistory();
    const [pathname, setPathname] = useState(history.location.pathname);
    const [menuOpened, setMenuOpened] = useState(false);

    const onFilterClick = () => {
        props.setFilterOn(!props.isFilterOn);
    }
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
    let filterButtonClass = 'filter-button';
    
    if (menuOpened) {
        headerClass += ' header-on-menu-opened';
        navContainerClass += ' nav-container-on-menu-opened';
        logoClass += ' logo-on-menu-opened';
        menuButtonClass += ' menu-button-on-menu-opened';
        buttonIconClass = 'fa fa-close';
        filterButtonClass += ' hidden';
    }

    if (props.isFilterOn) {
        filterButtonClass += ' filter-button-active';
    }

    return (
        <div className={headerClass}>
            <img className={logoClass} alt='Logo' />
            <div className={navContainerClass}> 
                <div className='nav-items-box'>
                    { menuItems.map(item => 
                        <MenuItem 
                            {...item} 
                            history={history} 
                            pathname={pathname}
                            setPathname={setPathname}
                            setMenuOpened={setMenuOpened}
                            key={item.title}
                        />
                    ) }
                </div>
            </div>
            <button className={filterButtonClass} onClick={onFilterClick} >
                <i className='fa fa-filter'></i>
            </button>
            <button className={menuButtonClass} onClick={ () => setMenuOpened(!menuOpened) }>
                <i className={buttonIconClass}></i>
            </button>
        </div>
    )
}