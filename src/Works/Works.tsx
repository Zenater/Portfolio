import React from 'react';
import w from './Works.module.css'
import b from "../common/styles/Container.module.css";
import Projects from "./Projects/Projects";

const Works = () => {
    return (
        <div className={w.worksBlock}>
            <div className={`${b.container} ${w.workContainer}`}>
                <h2 className={w.title}>My works</h2>
                <div className={w.works}>
                    <Projects />
                    <Projects />
                </div>
            </div>
        </div>
    );
};

export default Works;