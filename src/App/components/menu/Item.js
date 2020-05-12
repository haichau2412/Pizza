import React from 'react';
import { StyledItem, ImageContainer, Image } from './StyledMenu';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/CartSlice';

const Item = ({ product, ulti }) => {

    const dispatch = useDispatch();
    const { photo, name, description, price } = product;

    const handleClick = () => {
        dispatch(addToCart({ product }))
        ulti(`Add ${name}`, 'success', true);
    }
    return (
        <StyledItem>
            <ImageContainer >
                <Image image={photo} />
            </ImageContainer>
            <h5>{name}</h5>
            <p>{description}</p>
            <p>{`${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price)}`}</p>
            <button onClick={handleClick}>ADD TO CART</button>
        </StyledItem>
    )
}

export default Item;