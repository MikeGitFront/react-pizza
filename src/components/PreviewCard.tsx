import React, { useState } from 'react'
import { FaCartPlus, FaCheck } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'

const PreviewCardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    min-width:300px;
    border-radius:20px;
    border:1px solid transparent;
    padding:10px 0;
    box-shadow:0px 0px 4px 1px black;
    min-height:300px;
    transition:0.3s all linear;
    background-color:rgb(255,255,255,0.8);
    // background-color:rgb(255,160,30,0.9);

    &:hover {
        box-shadow:0px 0px 4px 1px black;
        border:1px solid black;
        background-color:white;
        transform:translateY(-5px)
    }
    @media (max-width:480px) {
        min-width:240px;
        border-radius:0;
    }
`

const PreviewCardHeader = styled.div`
    font-weight:600;
    color:black;
    padding:5px 0 20px 0;
    font-size:28px;
`

const PreviewCardBody = styled.div`
    display:flex;
    flex-direction:column;
    color:black;
    padding:0 0 15px 0;
`

const PreviewCardFooter = styled.div`
    display:flex;
    align-items:center;
    cursor:pointer;
    color:black;
    font-size:20px;
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  33% {
      transform:rotate(-5deg);
  }
  66% {
    transform: rotate(5deg);
  }
  100% {
      transform:rotate(0deg)
  }
`

const PreviewImage = styled.img`
    &:hover {
        animation: ${rotate} .5s linear alternate forwards 1;
    }

    @media (max-width:480px) {
        max-width:100%;
    }
`

const Sizes = styled.div`
    padding-top:10px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
`

type BgProps = {
    active?: boolean
}

const CardCheckbox = styled.div<BgProps>`
    display:flex;
    flex-direction:row-reverse;
    justify-content:space-between;
    align-items:center;
    width:100%;
    position:relative;
    margin-bottom:5px;
    transition:0.5s all ease;
    // background:rgb(190,190,190,.5);
    margin:10px 0;
    background:${props => props.active ? 'rgb(255,11,11,.5)' : 'rgb(190,190,190,.5)'};
    border-radius:5px;
    &:hover {
        width:100%;
        border-radius:20px;
        background-color:#FF5A68;
    }
    
`

const CardCheckboxInput = styled.input`
    width:100%;
    opacity:0;
    position:absolute;
`


const FakeCheckbox = styled.div`
    width:25px;
    height:25px;
    border-radius:20px;
    padding-left:2px;
    display:flex;
    justify-content:center;
    align-items:center;
    color:light-green;
`

export const Size = styled.p`
    font-size:24px;
    margin:5px 10px 5px 0;
    @media (max-width:480px) {
        font-size:20px;
    }
`

export const Weight = styled.p`
    font-size:18px;
    margin:0;
    position:absolute;
    left:50px;
    @media(max-width:480px) {
        font-size:16px;
        left:40px;
    }
`

export const Price = styled.p`
    font-size:26px;
    font-weight:600;
    margin:0;
    position:absolute;
    right:120px;
    @media(max-width:480px) {
        right:105px;
        font-size:20px;
    }
`

interface PreviewCardProps {
    src: string
    name: string
    cost: {
        large: number,
        medium: number
    }
}

export const PreviewCard: React.FC<PreviewCardProps> = ({ src, name, cost }) => {
    const [isChecked, setIsChecked] = useState(true)


    return (
        <PreviewCardWrapper>
            <PreviewCardHeader>{name}</PreviewCardHeader>
            <PreviewCardBody>
                <PreviewImage src={src} alt="" />
                <Sizes>
                    <CardCheckbox active={isChecked} onClick={() => setIsChecked(true)}>
                        <Size>Large</Size>
                        <Weight>1000g</Weight>
                        <Price>{cost.large}<sup>$</sup></Price>
                        <FakeCheckbox>
                            {isChecked ? <FaCheck style={{ fontSize: '20px' }} /> : null}
                        </FakeCheckbox>
                        <CardCheckboxInput type="radio" name={`${src}`} />
                    </CardCheckbox>
                    <CardCheckbox active={!isChecked} onClick={() => setIsChecked(false)}>
                        <Size>Medium</Size>
                        <Weight>650g</Weight>
                        <Price>{cost.medium}<sup>$</sup></Price>
                        <FakeCheckbox>
                            {!isChecked ? <FaCheck style={{ fontSize: '22px' }} /> : null}
                        </FakeCheckbox>
                        <CardCheckboxInput type="radio" name={`${src}`} />
                    </CardCheckbox>
                </Sizes>
            </PreviewCardBody>
            <PreviewCardFooter className="addToCart">Add to cart<FaCartPlus style={{ marginLeft: '5px' }} /></PreviewCardFooter>
        </PreviewCardWrapper>
    )
}