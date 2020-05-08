import React from 'react';
import { ProductFrame } from './StyledMenu';
import Item from './Item';


function ProductView({ products }) {

    return (
        <ProductFrame>
            {products.map((product, index) => {
                return <Item key={index} product={product} />
            })}
        </ProductFrame>
    )
}

export default ProductView;
