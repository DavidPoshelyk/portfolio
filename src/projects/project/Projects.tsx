import React from 'react';
import s from './Projects.module.css'

const Projects = (props:any) => {
    return (
        <div className={s.projects}>
            <div className={s.icon}>
                <a href='' className={s.title}>{props.title}</a>
            </div>

            <div className={s.itemsSpan}>
                <span className={s.nameProject}>{props.nameProject}</span>
                <span className={s.infoProject}>{props.infoProject}</span>
            </div>
        </div>
    );
};

export default Projects;