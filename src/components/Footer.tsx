import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.div`
    background-color:gray;
`

export const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <h2>Footer</h2>
        </FooterWrapper>
    )
}

