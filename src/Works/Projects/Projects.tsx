import React from 'react';
import p from "./Projects.module.scss";

type TitleType = {
    title:string
    style: any
}

const Projects = (props:TitleType) => {

    return (
        <div className={p.project}>
            <div className={p.imgContainer} style={props.style}>
                <a className={p.button}>Смотреть</a>
            </div>
            <div>
             <span className={p.projectInfo}>
                  <h3 className={p.projectTitle}>{props.title}</h3>
                 <span className={p.description2}>description</span>
             </span>
            </div>

        </div>

    );
};

export default Projects;