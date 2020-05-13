import React from 'react';
import { Image, InfoFrame, Tag, Description, Cost, Quantity, Total } from './StyledCart';
import sprite from '../../assets/sprite.svg';
import { add, reduce } from '../../redux/cart/CartSlice';
import { useDispatch } from 'react-redux';

const Product = ({ product, productId }) => {

    const dispatch = useDispatch();
    const { photo, name, description, quantity, price } = product;

    return (
        <>
            <InfoFrame>
                <Image image={photo} />
                <Tag>{name}</Tag>
                <Description>
                    {description}
                </Description>
                <Cost>
                    {`${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}`}
                </Cost>
                <Quantity>
                    <button onClick={() => dispatch(reduce({ _id: productId }))} >
                        <svg>
                            <use href={sprite + '#icon-arrow-down'} />
                        </svg>
                    </button>
                    <p>{quantity}</p>
                    <button onClick={() => dispatch(add({ _id: productId }))}>
                        <svg>
                            <use href={sprite + '#icon-arrow-up'} />
                        </svg>
                    </button>
                </Quantity>
                <Total>
                    {`${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(quantity * price)}`}
                </Total>
            </InfoFrame>
            <hr />
        </>
    )
}

export default Product;