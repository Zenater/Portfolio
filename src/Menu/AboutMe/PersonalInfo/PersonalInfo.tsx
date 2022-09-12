import s from './PersonalInfo.module.scss';
import React from 'react';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// @ts-ignore
import MyCV from "./cv/CV.pdf";

const personalInfo = [
	{title: 'First Name: ', content: 'Vitaly'},
	{title: 'Last Name: ', content: 'Volkov'},
	{title: 'Date of birth: ', content:'29 September 1995'},
	{title: 'English: ', content: 'Pre-Intermediate (in progress)'},
	{title: 'Address: ', content: 'Saint Petersburg, Russia'},
	{title: 'Email: ', content: 'zent230096@mail.ru'},
	{title: 'Phone: ', content: '+7 921 964 15 34'},
	{title: 'Telegram: ', content: '@Zenater'},
]

export const PersonalInfo = () => {

	const info = personalInfo.map((el, index) => {
		return <li className={s.personalInfoItem} key={index}>
			<span className={s.title}>{el.title}</span>
			<span className={s.content}>{el.content}</span>
		</li>
	})

	return (
		<div className={s.personalBox}>
			<div className={s.personalInfo}>
				<div className={s.personalInfoTitle}>
					<span className={s.personalIcon}><FontAwesomeIcon icon={faUser}/></span>
					<h4 className={s.personalInfoHeading}>Personal Info</h4>
				</div>
				<div className={s.personalDesc}>
					Hello. I'm developer with experience in
					creating SPA using React, Redux, TS/JS,
					HTML, CSS, . I'm delving into familiar
					technologies and I’m going to study
					new technologies such as React Native
					and Node.js, because in the future I
					want to be a full-stack developer. I like to
					spend my free time improving my
					English, solve tasks on the codewars.
					Open to your suggestions.
					<p className={s.subPersonalDesc}>
						Ready to consider project work and full-time employment.
					</p>
				</div>
				<div className={s.personalInfoInner}>
					<ul className={s.personalInfoList}>
						{info}
					</ul>
				</div>
			</div>
			<div className={s.resume}>
				<a className={s.resumeLink}
					 href={MyCV}
				   download={'cv_Volkov Vitaliy'}
					 target="_blank" rel="noopener noreferrer">Download CV</a>
			</div>
		</div>
	)
}
