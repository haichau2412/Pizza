import React from 'react';
import tomato from '../../assets/tomato.jpg';
import { StyledItem, ImageContainer, Image } from './StyledMenu';
const Item = () => {

    return (
        <StyledItem>
            <ImageContainer >
                <Image image={tomato} />
            </ImageContainer>
            <h5>Name of Pizza</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, laborum.</p>
            <p>170 000 VND</p>
            <button>Add to cart</button>
        </StyledItem>
    )
}

export default Item;