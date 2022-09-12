import React from 'react';
import s from './Experience.module.scss'
import {v1} from 'uuid';


const experience = [
	{
		id: v1(),
		company: 'https://it-incubator.ru/education/front-end',
		title: 'Front-end (React/Redux/Typescript)',
		description: 'IT-incubator, 2022'
	},
	{
		id: v1(),
		company: 'https://pskgu.ru/',
		title: 'Bachelor degree in mechanical engineering',
		description: 'Pskov State University, Computer Integrated Technologies, 2021'
	},
	{
		id: v1(),
		company: 'https://college.pskgu.ru/',
		title: 'Technician Engineering Technology ',
		description: 'College Pskov State University, Mechanical Engineering, 2015'
	},


]

export const Experience = () => {

	const experienceList = experience.map(exp => {
		return <li key={exp.id} className={s.expItem}>
			<p className={s.expHeading}>{exp.title}</p>
			<a className={s.expLink} href={exp.company} target="_blank">{exp.description}</a>
		</li>
	})

	return (
		<div className={`${s.expBox} ${s.animation}`}>
			<div className={s.expBoxTitle}>
				<h3 className={s.expTitle}>Education</h3>
			</div>
			<ul className={s.expList}>
				{experienceList}
			</ul>
		</div>
	)
}
