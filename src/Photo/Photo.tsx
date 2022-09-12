import React from 'react';
import s from './Photo.module.scss'
import {ParticlesContainer} from "../Menu/Common/ParticlesContainer";

export const Photo = () => {
    return (
        <div>
            <ParticlesContainer/>
            <div className={s.avatar}/>
        </div>
    );
}

