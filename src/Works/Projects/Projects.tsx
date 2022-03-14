import React from 'react';
import p from "../../Works/Projects/Projects.module.css";

const Projects = (props: { title: string }) => {
    return (
        <div className={p.project}>
            <div className={p.title}>
                <p>{props.title}</p>
            </div>
            <div>
             <span className={p.description}>
                  <p>Название проекта</p>
                 <p>Краткое описание</p>
             </span>
            </div>

        </div>

    );
};

export default Projects;