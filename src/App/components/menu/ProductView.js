import React from 'react';
import { ProductFrame } from './StyledMenu';
import Item from './Item';


function ProductView({ products, addNotification }) {

    return (
        <ProductFrame>
            {products.map((product, index) => {
                return <Item ulti={addNotification} key={index} product={product} />
            })}
        </ProductFrame>
    )
}

export default ProductView;
