import React from 'react';
import title from '../img/title-logo.png';
import titleSmall from '../img/2077.png'
import './title.scss'

const CyberpunkTitle = () => {
    return (
        <div className='title'>
            <img alt='title__cyberlogo' className='title__cyberlogo' src={title}/>
            <img alt='title__2077logo' className='title__2077logo' src={titleSmall}/>
        </div>
    )
}

const Title = () => {
    return (
        // TODO
        // Компонент <> это просто Реактовская обертка. Она нужна, если
        // у тебя например 3 блока div находится на одном уровне и у них нет родителя, и он не нужен.
        // В таком случае от этой обертки нет пользы, его можно убрать.
        // Правило: Если ты в Return возвращаешь НА ВЕРХНЕМ УРОВНЕ только ОДИН блок, тогда обертка не нужна
        // Если же на самом верхнем уровне находится больше 1 элемента - Реакт ругается, тогда добавляй <></>
        <>
        <CyberpunkTitle />
        </>
    )
}

export default Title;
