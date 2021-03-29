import React from 'react'
import styled from 'styled-components'
import { Filters } from './Filters'
import { PreviewPage } from './PreviewPage'

const HomePageWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`



export const HomePage: React.FC = () => {

    return (
        <HomePageWrapper>
            <Filters />
            <PreviewPage />
        </HomePageWrapper>
    )
}