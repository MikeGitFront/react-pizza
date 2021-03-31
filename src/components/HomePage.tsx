import React from 'react'
import styled from 'styled-components'
import { PreviewPage } from './PreviewPage'

const HomePageWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    max-width:1440px;
    margin:0 auto;
    margin-top:78px;
`



export const HomePage: React.FC = () => {

    return (
        <HomePageWrapper>
            <PreviewPage />
        </HomePageWrapper>
    )
}