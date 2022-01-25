import React from 'react';
import { useState, useEffect } from 'react';
import './HeaderNav.css';
import psPlus from '../../pics/psPlus.png'
import { cleanup } from '@testing-library/react';

export const HeaderNav = () => {

    const [ hour, setHour ] = useState( new Date().getHours() );
    const [ minutes, setMinutes] = useState( new Date().getMinutes() );

    const refreshTime = () => {
        setHour( new Date().getHours() );
        setMinutes( new Date().getMinutes() );
    };

    useEffect( () => {
        const timerId = setInterval( refreshTime, 500 );
        return () => {
            clearInterval( timerId );
        };
    }, [] );


    return (
        <nav className='header-nav header-height'>
            <ul className='header-height header-flex'>
                <li className='ps-plus header-height header-flex'>
                    <img src={ psPlus } alt="PS-Plus Logo" />
                    <a href="https://www.linkedin.com/in/peter-wagner1986/" target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li className='github header-height header-flex'>
                    <a className='space' href="https://github.com/PWagner86" target="_blank"><i className="fab fa-github"></i></a>
                    <div className="dot space"></div>
                    <div className="me space"></div>
                    <h1 className='space header-text-size'>Peter Wagner</h1>
                </li>
                <li className='resume header-height header-flex'>
                    <a className='space' href="https://pwagner86.github.io/" target="_blank"><i className="fas fa-trophy"></i></a>
                    <i className="fas fa-star space header-text-size"></i>
                    <h2 className='space header-text-size'>Lebenslauf</h2>
                </li>
                <li className='clock header-height header-flex'>
                    <p className='header-text-size'>{ `${ hour < 10 ? `0${ hour }` : hour }:${ minutes < 10 ? `0${ minutes }` : minutes }` }</p>
                </li>
            </ul>
        </nav>
    );
};
