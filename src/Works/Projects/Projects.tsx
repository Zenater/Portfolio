import React from 'react';
import p from "../../Works/Projects/Projects.module.css";

const Projects = () => {
    return (
        <div className={p.project}>
            <div className={p.imgContainer}>
                <img src="" alt="picture"/>
                <button className={p.button}>Смотреть</button>
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