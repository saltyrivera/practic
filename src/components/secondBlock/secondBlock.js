import React from "react";
import './secondBlock.scss';
import imgOne from '../../img/secondBlockImage-1.png';
import imgTwo from '../../img/secondBlockImage-2.png';
import imgThree from '../../img/secondBlockImage-3.png';


const SecondBlock = () => {
    return (
        <div className="secondBlock">
            <h1 className="secondBlock__title">Найт-Сити изменит тебя навсегда!</h1>
            <p className="secondBlock__text"><span className="secondBlock__color-text">Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</p>
            <div className="secondBlock__img-block">
                <div className="secondBlock__img-block__first-image"><img src={imgOne} alt=''></img></div>
                <div className="secondBlock__img-block__second-image"><img src={imgTwo} alt=''></img></div>
                <div className="secondBlock__img-block__third-image"><img src={imgThree} alt=''></img></div>
            </div>
        </div>
    )
}

export default SecondBlock;

