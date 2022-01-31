import React from 'react';
import s from './Main.module.css'

const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.container}>
                <div className={s.text}>
                    <span>Hello There</span>
                    <h1> Im David Posheluk</h1>
                    <p> React/TS</p>
                </div>
                <div className={s.photo}></div>
            </div>



        </div>
    );
};

export default Main;