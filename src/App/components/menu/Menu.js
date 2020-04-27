import React from 'react';
import ProductView from './ProductView';
import SmallCartView from './SmallCartView';
import { MenuWrapper } from './Styled';
import Sidebar from '../sharecomponents/sidebar/Sidebar';
import routes from './routes';

function Menu() {

    return (
        <>
            <Sidebar routes={routes} />
            <MenuWrapper >
                <ProductView>Menu</ProductView>
                <SmallCartView>Cart</SmallCartView>
            </MenuWrapper>
        </>

    )
};

export default Menu;
