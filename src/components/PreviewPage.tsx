import React, { useState } from 'react'
import styled from 'styled-components'
import { PreviewCard } from './PreviewCard'

const PreviewPageWrapper = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-template-rows:1fr;
    grid-gap:20px;
    padding:20px 20px;

    @media (max-width:1000px) {
        grid-template-columns:1fr 1fr;
        padding:10px 10px;
    }
    @media (max-width:670px) {
        grid-template-columns:1fr;
        padding:10px 40px;
    }
    @media (max-width:480px) {
        padding:5px 15px;
    }
    @media (max-width:320px) {
        padding:0 10px 10px 10px;
        grid-gap:5px;
    }
`

export const PreviewPage: React.FC = () => {
    const [pizzas] = useState([
        {
            name: 'Bavarian',
            src: 'https://www.upload.ee/image/13003017/Bavarskaya.png',
            cost: {
                large: 19.99,
                medium: 13.99,
            }
        },
        {
            name: 'Ranch',
            src: 'https://www.upload.ee/image/13003018/Ranch.png',
            cost: {
                large: 17.99,
                medium: 11.99,
            }
        },
        {
            name: 'BBQ chicken',
            src: 'https://www.upload.ee/image/13003020/BBQ.png',
            cost: {
                large: 19.99,
                medium: 13.99,
            }
        },
        {
            name: 'Hawaiian',
            src: 'https://www.upload.ee/image/13003022/Gavaiskaya.png',
            cost: {
                large: 17.99,
                medium: 11.99,
            }
        },
    ])

    return (
        <PreviewPageWrapper>
            {pizzas.map(item => <PreviewCard cost={item.cost} key={item.src} src={item.src} name={item.name} />)}
        </PreviewPageWrapper>
    )
}