import React from 'react';
import s from './Skills.module.css'
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.skill}>
            <div className={s.container}>
                <h2 className={s.title}>My Skills</h2>
                <div className={s.skills}>
                    <Skill
                        description="I build brands through
                                        cultural insights & strategic vision.
                                          Custom crafted business solutions."
                        title='Redux'/>
                    <Skill
                        description='Custom marketing solutions.
                                       Get your business on the next level.
                                       We provide worldwide marketing.'
                        title='Css'/>
                    <Skill
                        description='Design direction for business.
                                     Get your business on the next level.
                                     We help to create great experiences.'
                        title='Html'/>

                </div>

            </div>

        </div>
    );
};

export default Skills;