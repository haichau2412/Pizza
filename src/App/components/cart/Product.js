import React from 'react';
import { TableHeading, Image, StyledInfo, InfoFrame, Tag, Description, Cost, Quantity, Total, StyledHr } from './StyledCart';
import tomato from '../../assets/tomato.jpg';
import sprite from '../../assets/sprite.svg';

const Product = () => {
    return (
        <>
            <InfoFrame>
                <Image image={tomato} />
                <Tag>Basic pizza with ham</Tag>
                <Description>
                    Fresh lettuce, tomato, cucumber & onion with AL's homemade vinaigrette dressing.
                </Description>
                <Cost>
                    170.000 VND
                </Cost>
                <Quantity>
                    <button><svg>
                        <use href={sprite + '#icon-arrow-down'} />
                    </svg></button>
                    <p>5</p>
                    <button><svg>
                        <use href={sprite + '#icon-arrow-up'} />
                    </svg></button>
                </Quantity>
                <Total>
                    850.000 VND
                </Total>
            </InfoFrame>
        </>
    )
}
export default Product;