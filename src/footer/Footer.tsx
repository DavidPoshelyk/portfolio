import React from 'react';
import s from './Footer.module.css'

const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.container}>
                <h1 className={s.imName}> David Posheluk</h1>
                <div className={s.items}>
                    <div className={s.div1}>1</div>
                    <div  className={s.div2}>2</div>
                    <div  className={s.div3}>3</div>
                    <div  className={s.div4}>4</div>

                </div>
                <p className={s.p}> * 2022 Все Права защищены</p>

            </div>

        </div>
    );
};

export default Footer;