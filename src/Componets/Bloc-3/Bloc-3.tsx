import React from 'react';
import s from './Bloc3.module.css'
import ChildBlock3 from "./childBloc/childBlock-3";


const Bloc3 = () => {
    return (
        <div className={s.Wrapper}>
            <div className={s.items}>
                <div className={s.smallBloc1}>
                    <span> im skill</span>
                </div>
                <div className={s.smallBloc2}>
                  <div><ChildBlock3/></div>
                  <div><ChildBlock3/></div>





                </div>
            </div>


        </div>
    );
};

export default Bloc3;