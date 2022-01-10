import {ReactComponent as Itachi} from '../../Svg/itachi-001.svg';

import React, { useState } from 'react'
import './Navbar.css'
// CSS Transition package will help us control the conditional logic for rendering multiple menus and transition
//between them when they're added or removed from the application
import { CSSTransition } from 'react-transition-group';

function DropDownMenu() {

    const  [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props) {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu) }>
                <span className="icon-button"> {props.leftIcon} </span>
                {props.children}
                
                <span className="icon-right"> {props.rightIcon} </span>
            </a>
        )
    }
    return (
        <div className="dropdown" style={{height: menuHeight}}>
            <CSSTransition
            in={activeMenu === 'main'} 
            unmountOnExit 
            timeout={500}
            className="menu-primary"
            onEnter={calcHeight}
            >
                <div className='menu'>
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<Itachi />}
                        rightIcon={<Itachi />}
                        goToMenu="settings">
                            Settings    
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'settings'} 
                unmountOnExit
                timeout={500}
                className="menu-secondary"
                >
                    <div className='menu'>
                        <DropdownItem leftIcon={<Itachi />} goToMenu="main" />
                        <DropdownItem> Settings </DropdownItem>
                    </div>
            </CSSTransition>
        </div>
    )
}

export default DropDownMenu
