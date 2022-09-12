import React from 'react';
import s from './Intro.module.scss'
import {TypewriterEffect} from "./TypewriterEffect/TypewriterEffect";
import {Zoom} from "react-awesome-reveal";


export const Intro = () => {
    return (
        <a className={`${s.box} ${s.borderBtmRight}`}>
            <Zoom>
                <span className={s.textIntro}>Hi There! I'm</span>
                <span className={s.textIntroName}>Vitaliy Volkov</span>
                <TypewriterEffect/>
            </Zoom>
        </a>
    );
}

