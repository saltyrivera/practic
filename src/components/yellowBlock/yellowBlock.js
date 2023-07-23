import React, { Component } from 'react';
import './yellowBlock.scss';

const Block = () => {
    return (
        <div className='yellowblock'>
            <span className='yellowblock__text'>Доступно на всех платформах</span>
            <div className='yellowblock__container'>
                <button className='yellowblock__container__button'>Узнать больше</button>
            </div>
        </div>
    )
}

export default class YellowBlock extends Component {

    render() {
        return (
            <Block/>
        )
    }
}