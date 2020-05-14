import React from 'react';
import { StyledBanner, StyledHr, LinkButton, Logo, ShopInfo } from './StyledHome';
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

            <ShopInfo>
                <div>
                    <p>Phone:</p>
                    <p>1900 1099</p></div>
                <div>
                    <p>Address:</p>
                    <p>E.town 3. 364 Cong Hoa, Tan Binh, Ho Chi Minh City</p>
                </div>
            </ShopInfo>
        </StyledBanner >
    )
}

export default Banner;