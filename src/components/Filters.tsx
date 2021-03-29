import React from 'react'
import styled from 'styled-components'

const FiltersWrapper = styled.div`
    padding:10px 20px;
    background-color:transparent;
    color:white;
`

export const Filters: React.FC = () => {
    return (
        <FiltersWrapper>
            <h2>Filters right here but I don't think it's really good idea</h2>
        </FiltersWrapper>
    )
}