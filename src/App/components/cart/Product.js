import React from 'react';
import { Image, InfoFrame, Tag, Description, Cost, Quantity, Total } from './StyledCart';
import sprite from '../../assets/sprite.svg';
import tomato from '../../assets/tomato.jpg';



const Product = ({product}) => {
    const { photo, name, description, quantity, price } = product;
    return (
        <>
            <InfoFrame>
                <Image image={tomato} />
                <Tag>{name}</Tag>
                <Description>
                    {description}
                </Description>
                <Cost>
                    {price}
                </Cost>
                <Quantity>
                    <button><svg>
                        <use href={sprite + '#icon-arrow-down'} />
                    </svg></button>
                    <p>{quantity}</p>
                    <button><svg>
                        <use href={sprite + '#icon-arrow-up'} />
                    </svg></button>
                </Quantity>
                <Total>
                    {`${quantity * price} VND`}
                </Total>
            </InfoFrame>
        </>
    )
}
export default Product;