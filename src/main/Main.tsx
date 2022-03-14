import React from 'react';
import s from './Main.module.css';
import b from './../common/styles/Container.module.css';


const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={b.container}>
                <div className={s.text}>
                    <span>Hi </span>
                    <h1>I am Vitaliy</h1>
                    <p>Frontend developer</p>
                </div>
                <div className={s.photo}>photo</div>

            </div>

        </div>
    );
};

export default Main;