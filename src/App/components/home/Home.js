import React from 'react'
import Banner from './Banner'
import { ProductImage, StyledHome, DetailBox } from './StyledHome'
import Process from './Process'

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
