import React from 'react';
import './yellowBlock.scss';

// TODO
// Мне кажется, здесь Block лишний. У тебя внутри YellowBlock нет никакого другого кода и ты туда просто
// добавляешь содержимое блока Block. В таком случае от Block можно избавиться и сразу все перенести в YellowBlock

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
