import React from 'react';
import s from './Project.module.css'
import Projects from "./project/Projects";

const Project = () => {
    return (
        <div className={s.project}>
            <div className={s.container}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Projects title="Смотреть" nameProject="TodoList" infoProject="info ................. Project"/>
                    <Projects title="Смотреть" nameProject="Network" infoProject="info ................. Project"/>
                    {/*<Projects/>*/}

                </div>


            </div>

        </div>
    );
};

export default Project;