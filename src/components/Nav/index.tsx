import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav>
            <ul className="menu">
                <li className="routerLink">
                    <Link to="/">Cities</Link>
                </li>
                <li className="routerLink">
                    <Link to="/moscow">Moscow</Link>
                </li>
                <li className="routerLink">
                    <Link to="/saint-peterburg">Saint-peterburg</Link>
                </li>
                <li className="routerLink">
                    <Link to="/rostov-na-dony">Rostov-na-dony</Link>
                </li>
            </ul>
        </nav>
    );
};
