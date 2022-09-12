import React from 'react';
import s from './Menu.module.scss';
import {NavLink} from "react-router-dom";
import {Intro} from "../Intro/Intro";
import {PATH} from "../Routes/Navigates";

export const Menu = () => {
	return (
		<>
			<Intro/>
			<NavLink className={`${s.linkBox} ${s.borderBtmLeft}`} to={PATH.ABOUT}>
				<span className={s.white}>About</span>
				<span className={s.accent}>Me</span>
			</NavLink>
			<NavLink className={`${s.linkBox} ${s.borderTopRight}`} to={PATH.PORTFOLIO}>
				<span className={s.white}>My</span>
				<span className={s.accent}>Portfolio</span>
			</NavLink>
			<NavLink className={`${s.linkBox} ${s.borderTopLeft}`}  to={PATH.CONTACTS}>
				<span className={s.white}>Get</span>
				<span className={s.accent}>In Touch</span>
			</NavLink>
		</>
	)
}