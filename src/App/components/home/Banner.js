import React from 'react';
import { StyledBanner, StyledHr, LinkButton, Logo } from './StyledHome';
import LOGO from '../../assets/LOGO.svg';

const Banner = () => {

    return (
        <StyledBanner>
            <Logo src={LOGO} alt="Pyco Pizza" />
            <h1>PYCO PIZZA</h1>
            <StyledHr />
            <ul>
                <li>Authentic and handcrafted pizza</li>
                <li>Totally fresh and innovative take on pizza</li>
                <li>Every bite carries special aftertaste</li>
            </ul>
            <LinkButton to="/menu">Order now !</LinkButton>
        </StyledBanner >
    )
}

export default Banner;