import React from 'react';
import s from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a href="" style={{color:'yellow'}}>Главное</a>
            <a href="" style={{color:'yellow'}}>Скилы</a>
            <a href="" style={{color:'yellow'}}>Проекты</a>
            <a href="" style={{color:'yellow'}}>Контакты</a>
        </div>
    );
};

