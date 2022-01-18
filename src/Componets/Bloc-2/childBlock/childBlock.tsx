import React from 'react';
import s from './childBlock.module.css'

const ChildBlock = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.smallBlock1}>
                <div className={s.photo}>photo</div>
                <span className={s.text}>React</span>
            </div>
            <div className={s.smallBlock2}>
                info
            </div>

        </div>
    );
};

export default ChildBlock;