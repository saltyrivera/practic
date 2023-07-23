import React from 'react';
import Header from '../header';
import YellowBlock from '../yellowBlock';
import './welcome.scss';


const Welcome = () => {
    return (
        <div className='welcome-block'>
            <img className='welcome-block__img' alt=''></img>
            <Header className='header'/>
            <YellowBlock/>
        </div>
    );
};

export default Welcome;