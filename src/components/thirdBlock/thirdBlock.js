import React from "react";
import './thirdBlock.scss';
import saleImg from '../../img/sale.svg';
import contentImg from '../../img/thirdBlock-img.png';

const ThirdBlock = () => {
    return (
        <div className="thirdBlock">
            <div className="thirdBlock__header">
                <img className="thirdBlock__header__icon" src={saleImg} alt=''></img>
                <h1 className="thirdBlock__header__title">Играй и выигрывай!</h1>
            </div>
            <p className="thirdBlock__text">Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть консоль Xbox Series X или Sony PlayStation 5! Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
            <div className="thirdBlock__content">
                <form className="thirdBlock__content__form">
                    <input type='name' className="thirdBlock__content__form__name" placeholder="Как тебя зовут?"></input>
                    <input type='email' className="thirdBlock__content__form__email" placeholder="Твой е-mail"></input>
                    <label for='files_uploads'>dsasddasda</label>
                    <input id='files_uploads' type='file' className="thirdBlock__content__form__screenshot"></input>
                    <button className="thirdBlock__content__form__submit"></button>
                    <input className="thirdBlock__content__form__checkbox" type="checkbox" id='Согласен на обработку персональных данных'></input>
                </form>
                <img className="thirdBlock__content__img" alt='' src={contentImg}></img>
            </div>
        </div>
    )
}

export default ThirdBlock;