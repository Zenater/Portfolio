import React from 'react';
import f from './Footer.module.css'
import b from "../common/styles/Container.module.css";


const Footer = () => {
    return (
        <div className={f.footerBlock}>
            <div className={`${b.container} ${f.footerContainer}`}>
                <h2 className={f.title}>Vitaliy Volkov</h2>
                <div className={f.iconContainer}>
                    <div className={f.icon}>1</div>
                    <div className={f.icon}>2</div>
                    <div className={f.icon}>3</div>
                    <div className={f.icon}>4</div>
                </div>
                <div>2019 все права защищены</div>
            </div>
        </div>

    );
};

export default Footer;