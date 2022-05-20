import React from 'react';
import c from './Contacts.module.css'
import b from './../common/styles/Container.module.css';
import Title from "../common/components/title/Title";

const Contacts = () => {
    return (
        <div className={c.contactsBlock}>
            <div className= {`${b.container} ${c.contactsContainer}`} >                <div>
                    <form className={c.formCont}>
                        <Title text={'Projects'}/>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea>
                    </textarea>
                        <button type={"submit"}>Отправить</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;