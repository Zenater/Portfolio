import React, {FC} from 'react';
import s from './ContactBlock.module.scss';
import {ContactFormBlock} from './ContactFormBlock/ContactFormBlock';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkedAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const contact = [
    {title: 'phone', text: '+7 921 964 15 34', icon: faPhoneAlt},
    {title: 'telegram', text: '@Zenater', icon: faTelegramPlane},
    {title: 'github', text: 'Go to github', icon: faGithub},
    {title: 'address', text: 'Saint-Petersburg, Russia', icon: faMapMarkedAlt},
]

type ContactBlockPropsType = {
    setStatusResult: (value: boolean) => void
    showModal: (value: boolean) => void
}

export const ContactBlock: FC<ContactBlockPropsType> = ({setStatusResult, showModal}) => {


    const contactInfo = contact.map((el, index) => {

        return <li key={index} className={s.contactItem}>
            <h3 className={s.contactTitle}>{el.title}</h3>
            <span className={s.contactIcon}>
				<FontAwesomeIcon icon={el.icon as IconProp}/>
			</span>
            {el.text === 'Go to github' ?
                <a className={s.contactText} target='_blank' href='https://github.com/Zenater'>{el.text}</a> :
                <span className={s.contactText}>{el.text}</span>
            }
        </li>
    })

    return (
        <div className={s.contactBox}>
            <ul className={s.contactList}>{contactInfo}</ul>
            <ContactFormBlock setStatusResult={setStatusResult} showModal={showModal}/>
        </div>
    )
}