import React from 'react';
import './contact.scss';

const Contact = () => {
        return (
            <div className='contact'>
                <ul className='contact__container'>
                    <a href='https://youtube.com'><li className='contact__container__youtube'></li></a>
                    <a href='https://youtube.com'><li className='contact__container__vk'></li></a>
                    <a href='https://youtube.com'><li className='contact__container__facebook'></li></a>
                    <a href='https://youtube.com'><li className='contact__container__twitter'></li></a>
                    <a href='https://youtube.com'><li className='contact__container__twitch'></li></a>
                    <a href='https://youtube.com'><li className='contact__container__instagram'></li></a>
                </ul>
            </div>
        );
};

export default Contact;
