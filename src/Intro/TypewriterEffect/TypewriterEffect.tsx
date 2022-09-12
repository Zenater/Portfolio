import React from 'react';
import s from './../Intro.module.scss';
import Typewriter from "typewriter-effect";


export const TypewriterEffect = () => {

    return (
        <div className={`${s.textIntro} ${s.textIntroAccent}`}>
            <Typewriter options={{
                strings: "Frontend developer",
                autoStart: true,
                loop: true,
            }}
            />
        </div>
    );
}
