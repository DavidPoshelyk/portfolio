import React from 'react';
import s from './Bloc1.module.css'

const Bloc1 = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.items}>
                <div className={s.smallBloc1}>
                    name
                </div>
                <div className={s.smallBloc2}>
                    фото
                </div>
            </div>
        </div>
    );
};

export default Bloc1;