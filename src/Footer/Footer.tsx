import React from 'react';
import f from './Footer.module.css'
import b from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import  css  from './css.png';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import CssIcon from '@mui/icons-material/Css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Footer = () => {
    return (
        <div className={f.footerBlock}>
            <div className={`${b.container} ${f.footerContainer}`}>
                <Title text={'Vitaliy Volkov'}/>
                <div className={f.iconContainer}>
                    <div className={f.icon}>2</div>
                    {/*<FontAwesomeIcon icon={faReact}/>*/}
                    <div>
                        <img alt={'css'} src={css}/>
                    </div>
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