import React from 'react';
import './app.scss';
import Welcome from '../welcome/Welcome';
import SecondBlock from '../secondBlock';

// TODO
// Папка components нужна только для хранения самих React компонентов, в ней не должно быть ничего лишнего.
// У тебя в ней лежат fonts и img. Технически, папку img можно вынести на один уровень с components (хотя достаточно часто ее хранят внутри public)
// Папку fonts тоже можно добавить внутрь папки public, либо же на одном уровне с components.
// Также у тебя есть лишний файл index.css внутри component, внутри которого ничего нет, нужно удалить

const App = () => {
        return (
            <>
                <Welcome/>
                <SecondBlock/>
            </>
        );
};

export default App;
