import React from 'react';
import './yellowBlock.scss';

const Block = () => {
    return (
        <>
        <div className='yellowblock'>
            <span className='yellowblock__text'>Доступно на всех платформах</span>
            <button className='yellowblock__button'>Узнать больше</button>
        </div>
        <div className='whitebottom'></div>
        </>
    )
}

const YellowBlock = () => {
    return (
        <Block/>
    )
}

export default YellowBlock;