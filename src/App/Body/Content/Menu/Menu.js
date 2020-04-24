import React from 'react';
import ProductView from './ProductView';
import SmallCartView from './SmallCartView';
import { MenuWrapper } from './Styled';

function Menu() {

    return (
        <MenuWrapper >
            <ProductView>Menu</ProductView>
            <SmallCartView></SmallCartView>
        </MenuWrapper>
    )
};

export default Menu;
