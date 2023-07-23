import React, { Component } from 'react';
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

export default class YellowBlock extends Component {

    render() {
        return (
            <Block/>
        )
    }
}