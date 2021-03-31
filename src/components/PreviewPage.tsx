import React, { useState } from 'react'
import styled from 'styled-components'
import { PreviewCard } from './PreviewCard'

const PreviewPageWrapper = styled.div`
    display:grid;
    justify-content:center;
    grid-template-columns: 350px 350px 350px;
    grid-template-rows:1fr;
    grid-gap:20px;
    padding:20px 20px;

    @media (max-width:1200px) {
        grid-template-columns:320px 320px;
        padding:10px 10px;
    }
    @media (max-width:670px) {
        grid-template-columns:320px;
        padding:10px 40px;
    }
    @media (max-width:480px) {
        padding:10px 15px;
    }
    @media (max-width:320px) {
        padding:10px;
        grid-template-columns:1fr;
        grid-gap:10px 5px;
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
            },
            weight: {
                large: 1200,
                medium: 690,
            },
        },
        {
            name: 'Ranch',
            src: 'https://www.upload.ee/image/13003018/Ranch.png',
            cost: {
                large: 17.99,
                medium: 11.99,
            },
            weight: {
                large: 1000,
                medium: 600,
            },
        },
        {
            name: 'Chicken BBQ',
            src: 'https://www.upload.ee/image/13003020/BBQ.png',
            cost: {
                large: 19.99,
                medium: 13.99,
            },
            weight: {
                large: 1100,
                medium: 670,
            },
        },
        {
            name: 'Hawaiian',
            src: 'https://www.upload.ee/image/13003022/Gavaiskaya.png',
            cost: {
                large: 17.99,
                medium: 11.99,
            },
            weight: {
                large: 1050,
                medium: 650,
            },
        },
    ])

    return (
        <PreviewPageWrapper>
            {pizzas.map(item => <PreviewCard weight={item.weight} cost={item.cost} key={item.src} src={item.src} name={item.name} />)}
        </PreviewPageWrapper>
    )
}