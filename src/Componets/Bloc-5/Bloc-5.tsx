import React from 'react';
import s from './Bloc5.module.css'

const Bloc5 = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.items}>
                <div className={s.items1}>рассматриваю варианты удаленной работы</div>
                <div className={s.inputs}>
                   <input/>
                   <input/>
                   <textarea/>

                </div>
                <div className={s.items2}> Нанять  меня</div>
            </div>

        </div>
    );
};

export default Bloc5;