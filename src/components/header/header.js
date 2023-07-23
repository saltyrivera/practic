import React, { Component } from 'react';
import Contant from '../contact';
import Title from '../title';
import './header.scss'

export default class Header extends Component {
    render() {
        return (
            <>
                <Title />
                <Contant />
            </>
        ) 
    }
}