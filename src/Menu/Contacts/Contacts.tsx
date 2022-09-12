import React, {useState} from 'react';
import s from './Contacts.module.scss'
import {NavLink} from 'react-router-dom';
import app from '../../App.module.scss';
import close from '../../assests/image/close-button.png'
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {ContactBlock} from './ContactBlock/ContactBlock';
import m from './ModalForm.module.scss';
import {Title} from '../Common/Title/Title';
import {Modal} from "../Common/Modal/Modal";

export const Contacts = () => {

    const [modal, setModal] = useState(false)
    const [statusResult, setStatusResult] = useState<null | boolean>(null)

    const hideModal = () => setModal(false)
    const showModal = () => setModal(true)

    return (
        <div className={`${s.contacts} ${s.animation}`}>
            <div className={s.contactsWrapper}>
                <div className={`${s.contactsInner} ${app.container}`}>
                    <Title title='my' accentTitle='contacts' icon={faPhoneAlt}/>
                </div>

                <div>
                    <ContactBlock setStatusResult={setStatusResult} showModal={showModal}/>
                </div>

            </div>
            <Modal active={modal}>
                <p className={m.close} onClick={hideModal}>&times;</p>
                {
                    statusResult ?
                        <>
                            <p className={m.modalSuccessTitle}>Your email has been sent successfully!</p>
                            <p className={m.modalSuccessTexts}>I will try to respond soon<span role="img"
                                                                                               aria-label="smile">&#128578;</span>
                            </p>

                        </>
                        :
                        <>
                            <p className={m.modalErrorTitle}>Oops, something went wrong!</p>
                            <p className={m.modalErrorTexts}>Sorry, your email hasn't been sent.
                                To contact me, please use telegram.</p>
                            <p className={m.modalError}>Thank you for understanding
                                <span role="img" aria-label="smile">&#128578;</span>
                            </p>

                        </>
                }
            </Modal>

            <NavLink to={'/'} className={app.linkBack}>
                <img src={close} alt={'close'}/>
            </NavLink>
        </div>
    );
}

