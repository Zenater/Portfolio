import React from 'react';
import s from './Skills.module.scss'
import {v1} from 'uuid';
import css from './image/css.svg'
import git from './image/git.svg'
import html from './image/html.svg'
import jest from './image/jest.svg'
import js from './image/js.svg'
import redux from './image/redux.svg'
import ts from './image/typeScript.svg'
import react from './image/react1.svg'
import story from './image/storybook.svg'
import reduxToolkit from './image/reduxToolkit.svg'
import restApi from './image/restAPI.svg'
import vue from './image/vue.svg'

type SkillsType = {
	id: string
	skill: string
	icon: any
}

const skills: Array<SkillsType> = [
	{id: v1(), skill: 'React', icon: react},
	{id: v1(), skill: 'Redux', icon: redux},
	{id: v1(), skill: 'TypeScript', icon: ts},
	{id: v1(), skill: 'JavaScript', icon: js},
	{id: v1(), skill: 'Redux-Toolkit', icon: reduxToolkit},
	{id: v1(), skill: 'HTML5', icon: html},
	{id: v1(), skill: 'REST API', icon: restApi},
	{id: v1(), skill: 'CSS & preprocessing', icon: css},
	{id: v1(), skill: 'TDD - Jest', icon: jest},
	{id: v1(), skill: 'Storybook', icon: story},
	{id: v1(), skill: 'Github', icon: git},
	{id: v1(), skill: 'Vue', icon: vue},
]

export const Skills = () => {

	const skillsList = skills.map(skill => {
		return <li key={skill.id} className={s.skillItem}>
				<span className={s.aboutIcon}>
					<img src={skill.icon} className={s.aboutIcon} alt={skill.skill}/>
					</span>
				<p className={s.skillTitle}>{skill.skill}</p>
			</li>
	})

	return (
		<div className={`${s.skillBox} ${s.animation}`}>
			<div className={s.skillHeadingBox}>
				<h3 className={s.skillHeading}>Skills</h3>
			</div>
			<ul className={s.skillList}>
				{skillsList}
			</ul>
		</div>
	)
}
