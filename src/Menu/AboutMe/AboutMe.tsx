import React from 'react';
import s from './AboutMe.module.scss'
import close from '../../assests/image/close-button.png'
import app from '../../App.module.scss'
import {NavLink} from 'react-router-dom';
import {Resume} from './Resume/Resume';
import {faIdCard} from '@fortawesome/free-solid-svg-icons';
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {Title} from "../Common/Title/Title";

export const AboutMe = () => {
	return (
		<div className={`${s.aboutBox} ${s.animation}`}>
			<div className={s.aboutWrapper}>
				<div className={`${s.aboutInner} ${app.container}`}>
					<Title title='about' accentTitle='me' icon={faIdCard}/>
					<PersonalInfo/>
					<Resume/>
				</div>
			</div>
			<NavLink to={'/'}  className={app.linkBack}><img src={close} alt={'close'}/></NavLink>
		</div>
	);
}

