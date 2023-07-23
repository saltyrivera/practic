import React, { Component } from 'react';
import './app.scss';
import Header from '../header';
import YellowBlock from '../yellowBlock';

export default class App extends Component {
    render() {
        return (
            <>
            <div className='header'>
            <Header />
            </div>
            <YellowBlock/>
            </>
        )
    }
}