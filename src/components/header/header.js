import React from 'react';
import Contant from '../contact';
import Title from '../title';
import './header.scss'

const Header = ({className}) => {
    return (
        <div className={className}>
            <Title />
            <Contant />
        </div>
    );
};

export default Header;