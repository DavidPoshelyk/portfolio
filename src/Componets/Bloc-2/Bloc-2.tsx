import React from 'react';
import s from './Bloc2.module.css'
import ChildBlock from "./childBlock/childBlock";

const Bloc2 = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.items}>
           <div className={s.smallBloc1}>
               <span> im skill</span>
           </div>
                <div className={s.smallBloc2}>
                    <div><ChildBlock/></div>

                    <div><ChildBlock/></div>

                    <div><ChildBlock/></div>






                </div>
            </div>


        </div>
    );
};

export default Bloc2;