import React from 'react';
import { StyledBanner, StyledHr } from './StyledHome';

const Banner = () => {
    return (
        <StyledBanner>
            <h1>PYCO PIZZA</h1>
            <StyledHr />
            <ul>
                <li>Authentic and handcrafted pizza</li>
                <li>Totally fresh and innovative take on pizza</li>
                <li>Every bite carries special aftertaste</li>
            </ul>
            <button>Order now !</button>
        </StyledBanner >
    )
}

export default Banner;