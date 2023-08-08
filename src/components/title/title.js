import React from 'react';
import title from '../../img/title-logo.png';
import titleSmall from '../../img/2077.png'
import './title.scss'

const Title = () => {
    return (
        <div className='title'>
            <img alt='title__cyberlogo' className='title__cyberlogo' src={title}/>
            <img alt='title__2077logo' className='title__2077logo' src={titleSmall}/>
        </div>
    )
}

export default Title;
