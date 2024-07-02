import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import s from './ContactFormBlock.module.scss';
import {Loader} from "../../../Common/Loader/Loader";
import emailjs from 'emailjs-com'

type ContactFormBlockPropsType = {
    setStatusResult: (value: boolean) => void
    showModal: (value: boolean) => void
}

type ContactFormPropsType = {
    setStatusResult: (value: boolean) => void
    showModal: (value: boolean) => void
}


export const ContactFormBlock: FC<ContactFormBlockPropsType> = ({setStatusResult, showModal}) => {

    return (
        <div className={s.contactBox}>
            <div>
                <h3 className={s.formTitle}>FEEL FREE TO DROP ME A LINE</h3>
                <p className={s.formText}>If you have any suggestion, project or even you want to say Hello.. Please
                    fill out
                    the form below and I will
                    reply you shortly.</p>
            </div>
            <ContactForm setStatusResult={setStatusResult} showModal={showModal}/>
        </div>
    )
}


export const ContactForm: FC<ContactFormPropsType> = ({setStatusResult, showModal}) => {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')

    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState('')
    const [status, setStatus] = useState('')

    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading')

        try {
           await emailjs.sendForm('service_go76l45', 'template_e1q83oh', e.currentTarget, 'h9v5sg_vVxJybGvIo')
            setStatusResult(true)

            setMessage('')
            setName('')
            setEmail('')
        } catch (e) {
            setStatusResult(false)
            console.log(e)
        }
        setStatus('success')
        showModal(true)
    };

    const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const email = e.currentTarget.value
        const re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
        setEmail(email)

        if (!re) {
            setEmailError('Invalid email address')
            if (email.trim() === '') {
                setEmailError('Required')
            }
        }else setEmailError('')
    }

    const messageHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const message = e.currentTarget.value
        setMessage(message)
        if (message.length < 6) {
            setMessageError('Why is the message so short?')
            if (message.trim() === '') {
                setMessageError('Required')
            }
        } else {
            setMessageError('')
        }
    }

    const namedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.value
        setName(name)
        if (name.trim() === '') {
            setNameError('Required')
        } else {
            setNameError('')
        }
    }

    return (
        <form  onSubmit={sendEmail} className={status === 'loading' ? s.formLoading : ''}>
            <div className={s.formBox}>
                <div className={s.group}>

                    <input type="text"
                           required
                           name='name'
                           value={name}
                           onChange={namedHandler}
                           className={s.input}
                    />

                    <span className={s.highlight}/>
                    <span className={s.bar}/>
                    <label className={s.label}>Your Name</label>
                    { nameError && <div className={s.formError}>{nameError}</div>}
                </div>

                <div className={s.group}>
                    <input type="text"
                           required
                           name='email'
                           value={email}
                           onChange={emailHandler}
                           className={s.input}
                    />

                    <span className={s.highlight}/>
                    <span className={s.bar}/>
                    <label className={s.label}>Email Address</label>
                    {emailError && <div className={s.formError}>{emailError}</div>}
                </div>
                <div className={s.group}>

                    <input type="text"
                           required
                           value={message}
                           name='message'
                           onChange={messageHandler}
                           className={s.input}
                    />

                    <span className={s.highlight}/>
                    <span className={s.bar}/>
                    <label className={s.label}>Your Message</label>
                    {messageError && <div className={s.formError}>{messageError}</div>}
                </div>

                {status === 'loading' ? <Loader/> : null}
                <button type="submit" className={s.formBtn} disabled={status === 'loading'}>Send Message</button>
            </div>
        </form>
    );
}
