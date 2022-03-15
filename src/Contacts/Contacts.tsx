import React from 'react';
import c from './Contacts.module.css'
import b from './../common/styles/Container.module.css';

const Contacts = () => {
    return (
        <div className={c.contactsBlock}>
            <div className= {`${b.container} ${c.contactsContainer}`} >                <div>
                    <form action="" className={c.formCont}>
                        <h2>Contacts</h2>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea>
                    </textarea>
                        <button>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;