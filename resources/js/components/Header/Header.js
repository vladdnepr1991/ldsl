import React from 'react';
import './index.scss';

const Header = () => (
    <nav className="main-nav">
        <ul className="main-nav-list">
            <li className="main-nav-list__item"><span>Главная</span></li>
            <li className="main-nav-list__item"><span>Про нас</span></li>
            <li className="main-nav-list__item"><span>Проекты</span></li>
            <li className="main-nav-list__item"><span>Магазин</span></li>
        </ul>
    </nav>
);

export default Header;