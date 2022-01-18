import React from 'react';
import  s from './childBlock-3.module.css'

const ChildBlock3 = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.smallBloc1}>
                <div className={s.button}>смотреть</div>
            </div>
            <div className={s.smallBloc2}>
               <div>name project</div>
               <div>info</div>
            </div>

        </div>
    );
};

export default ChildBlock3;