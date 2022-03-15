import React from 'react';
import s from './Skills.module.css'
import b from './../common/styles/Container.module.css';
import {Skill} from "./skill/Skill";


const Skills = () => {
    return (
        <div className={s.skillBlock}>
            <div className= {`${b.container} ${s.skillContainer}`} >
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                <Skill title={'JS'} description={'Lorem ipsum dolor sit amet'} />
                <Skill title={'React'} description={'Lorem ipsum dolor sit amet'}/>
                <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet'}/>
                </div>
            </div>
        </div>
    );
};
export default Skills;
