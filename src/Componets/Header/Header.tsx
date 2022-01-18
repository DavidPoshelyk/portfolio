import React from 'react';
import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerLink}>
                <div>Главная</div>
                <div>Скиллы</div>
                <div>Работы</div>
                <div>Контакты</div>
            </div>

        </div>
    );
};

export default Header;