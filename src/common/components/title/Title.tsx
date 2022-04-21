import React from 'react';
import t from './Title.module.scss'

type TitleType = {
    text:string
}

const Title = (props:TitleType) => {

    return (
                <div className={t.title}>
                    <h3>{props.text}</h3>
                </div>
    );
};

export default Title;