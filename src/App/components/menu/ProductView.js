import React from 'react';
import { ProductFrame } from './StyledMenu';
import Item from './Item';


function ProductView({ products, addNotification, category }) {

    return (
        <ProductFrame>
            {products.map((product, index) => {
                return <Item ulti={addNotification} key={index} product={{ ...product, category }} />
            })}
        </ProductFrame>
    )
}

export default ProductView;
