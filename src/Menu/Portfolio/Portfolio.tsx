import React from 'react';
import s from './Portfolio.module.scss'
import {NavLink} from 'react-router-dom';
import app from '../../App.module.scss';
import close from '../../assests/image/close-button.png'
import {faSuitcase} from '@fortawesome/free-solid-svg-icons';
import {Projects} from './Projects/Projects';
import {Title} from "../Common/Title/Title";

export const Portfolio = () => {
	return (
		<div className={`${s.portfolio} ${s.animation}`}>
			<div className={s.portfolioWrapper}>
				<div className={`${s.portfolioInner} ${app.container}`}>
					<Title title='my' accentTitle='portfolio' icon={faSuitcase}/>

					<div className={s.portfolioProjects}>
						<Projects />
					</div>

				</div>
			</div>
			<NavLink to={'/'}  className={app.linkBack}>
				<img className={app.aboutBtnClose} src={close}/>
			</NavLink>
		 </div>
	);
}

