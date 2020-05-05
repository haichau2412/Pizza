import React from 'react';
import ProductView from './ProductView';
import Sidebar from '../sharecomponents/sidebar/Sidebar';
import routes from './routes';

function Menu() {

    return (
        <>
            <Sidebar routes={routes} />
            <ProductView>Menu</ProductView>
        </>
    )
};

export default Menu;
