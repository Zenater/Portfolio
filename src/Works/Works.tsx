import React from 'react';
import w from './Works.module.css'
import b from "../common/styles/Container.module.css";
import Projects from "./Projects/Projects";
import Title from "../common/components/title/Title";
import todoImg from'./../assets/image/sdfsdf.png'
import socNEtw from'./../assets/image/пример.png'


const Works = () => {

    const social = {
        backgroundImage: `url(${todoImg})`
    }
    const todo = {
        backgroundImage: `url(${socNEtw})`
    }

    return (
        <div className={w.worksBlock}>
            <div className={`${b.container} ${w.workContainer}`}>
              <Title text={'Projects'}/>
                <div className={w.works}>
                    <Projects style={social} title={'1 work'} />
                    <Projects style={todo}  title={'2 work'}/>
                </div>
            </div>
        </div>
    );
};

export default Works;