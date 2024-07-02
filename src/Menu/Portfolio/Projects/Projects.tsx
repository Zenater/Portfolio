import React from 'react';
import s from './Projects.module.scss';
import todo from './projectCover/todo.png'
import cardsTraining from './projectCover/cardsTraining.png'
import {v1} from 'uuid';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

const project = [
	{id: v1(), heading: 'Todolist', demo: 'https://zenater.github.io/Todolist_Vivo/', github: 'https://github.com/Zenater/Todolist_Vivo', image: todo},
	// {id: v1(), heading: 'Social NetWork', demo: '', github: 'https://github.com/Zenater/social-network-vivo-', image: social},
	{id: v1(), heading: 'Cards Training', demo: 'https://zenater.github.io/cards-training/', github: 'https://github.com/Zenater/cards-training', image: cardsTraining},
]


export const Projects= () => {
	const faEyeIcon = faEye as IconProp;
	const faGithubIcon = faGithub as IconProp;
	const projects = project.map(project => {

		return <div className={s.tiles} key={project.id}>
				<div className={s.tile} >
					<img src={project.image} className={s.projectImage} alt={'project'}/>
					<div className={s.details}>
						<span className={s.title}>{project.heading}</span>
						<span className={s.info}>
							<FontAwesomeIcon icon={faEyeIcon}
								className={s.icon} />
							<a href={project.demo} className={s.link} rel='noreferrer' target="_blank">Demo</a>
						</span>
						<span className={s.info}>
							<FontAwesomeIcon
								icon={faGithubIcon}
								className={s.icon}/>
							<a href={project.github} rel='noreferrer' className={s.link} target="_blank">Github</a></span>
					</div>

				</div>
		</div>
	})

	return (
		<div className={s.projectBox}>
			{projects}
		</div>
	)
}
