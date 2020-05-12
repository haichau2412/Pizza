import React from 'react';
import { ListNav, NavButton, NavSmall, NavIcon } from './StyledHeader';
import DropdownNav from './DropdownNav';
import sprite from '../../../assets/sprite.svg';


const HeaderNav = ({ auth }) => {

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsOpen(pre => !pre);
    }

    const toggleOutside = React.useCallback(
        () => {
            if (isOpen === true) {
                setIsOpen(false);
            }
        }, [isOpen]);


    return (
        <>
            <ListNav>
                <li><NavButton to="/home">Home</NavButton></li>
                <li><NavButton to="/menu">Menu</NavButton></li>
                <li><NavButton to="/cart">Cart</NavButton></li>
                {auth ? <li><NavButton to="/history">History</NavButton></li> : null}
            </ListNav>
            <NavSmall>
                <NavIcon onClick={toggleMenu}>
                    <svg>
                        <use href={sprite + '#icon-menu'} />
                    </svg>
                </NavIcon>
                {isOpen ? <DropdownNav toggle={toggleOutside} auth={auth} /> : null}
            </NavSmall>
        </>

    )
}
export default HeaderNav;
