import React from 'react';
import s from './App.module.scss'
import {Menu} from "./Menu/Menu";
import {Navigates} from "./Routes/Navigates";
import {Photo} from "./Photo/Photo";

export function App() {

    return (
        <div className={s.wrapper}>
            <div className={s.leftBox}>
                <Photo/>
            </div>
            <div className={s.rightBox}>
                <Menu/>
                <Navigates/>
            </div>
        </div>

    );
}
