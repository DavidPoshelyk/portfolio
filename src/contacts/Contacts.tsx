import React from 'react';
import s from './Contacts.module.css'

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.container}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.input}>
                    <input className={s.input1} type='text'/>
                    <input className={s.input2} type='text'/>
                    <textarea className={s.textarea}></textarea>
                </form>
                <a href='' className={s.send}>Send</a>
            </div>

        </div>
    );
};

export default Contacts;