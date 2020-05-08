import React from 'react'
import Banner from './Banner'
import { ProductImage, StyledHome, DetailBox } from './StyledHome'

function Home() {

    return (
        <StyledHome>
            <DetailBox>
                <Banner />
            </DetailBox>
            <ProductImage />
        </StyledHome>
    )
}

export default Home
