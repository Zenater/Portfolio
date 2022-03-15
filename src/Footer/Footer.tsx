import React from 'react';
import f from './Footer.module.css'
import b from "../common/styles/Container.module.css";
import s from "../skils/Skills.module.css";


const Footer = () => {
    return (
        <div className={f.footerBlock}>
            <div className={b.container}>
                <div className={f.footerContainer}>
                <h2 className={s.title}>Vitaliy Volkov</h2>
            <div>
                <div className={f.footerSocialContainer}></div>
                <div className={f.icon}></div>
                <div className={f.icon}></div>
                <div className={f.icon}></div>
                <div className={f.icon}></div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Footer;