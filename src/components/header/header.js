import React from 'react';
import Contant from '../contact';
import Title from '../title';
import './header.scss'

const header = ({className}) => {
    return (
        <div className={className}>
            <Title />
            <Contant />
        </div>
    );
};

export default header;