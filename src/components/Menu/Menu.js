import React from 'react';
import { push as Menu } from 'react-burger-menu';
import Sidebar from '../Sidebar/Sidebar';

import './Menu.scss'

const CVMenu = (props) => {
    return (
        <Menu {...props}>
            <Sidebar canHide/>
        </Menu>
    );
};

export default CVMenu;