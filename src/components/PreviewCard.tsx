import React, { useState } from 'react'
import { FaCartPlus, FaCheck } from 'react-icons/fa'
import styled, { keyframes } from 'styled-components'

const PreviewCardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    min-width:300px;
    // width:100%;
    border-radius:20px;
    border:1px solid transparent;
    padding:10px 0;
    box-shadow:0px 0px 4px 1px black;
    min-height:300px;
    transition:0.3s all linear;
    background-color:rgb(255,255,255,0.8);

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
    font-size:28px;
`

const PreviewCardBody = styled.div`
    display:flex;
    flex-direction:column;
    color:black;
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

const CardCheckbox = styled.div`
    width:100%;
    position:relative;
    margin-bottom:5px;
`

const CardCheckboxInput = styled.input`
    width:100%;
    opacity:0;
`


const FakeCheckbox = styled.div`
    position:absolute;
    left:5px;
    width:20px;
    height:20px;
    border-radius:20px;
    border:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
`

const Size = styled.p`
    font-size:24px;
    position:absolute;
    right:10px;
    top:-10px;
    margin:0;
`

interface PreviewCardProps {
    src: string
    name: string
}

export const PreviewCard: React.FC<PreviewCardProps> = ({ src, name }) => {
    const [isCheckedBig, setIsCheckedBig] = useState(true)
    const [isCheckedSmall, setIsCheckedSmall] = useState(false)
    return (
        <PreviewCardWrapper>
            <PreviewCardHeader>{name}</PreviewCardHeader>
            <PreviewCardBody>
                <PreviewImage src={src} alt="" />
                <Sizes>
                    <CardCheckbox onClick={() => setIsCheckedBig(!isCheckedBig)}>
                        <Size>Royal</Size>
                        <FakeCheckbox>
                            {isCheckedBig && !isCheckedSmall ? <FaCheck /> : null}
                        </FakeCheckbox>
                        <CardCheckboxInput type="radio" name={`${src}`} />
                    </CardCheckbox>
                    <CardCheckbox onClick={() => setIsCheckedSmall(!isCheckedSmall)}>
                        <Size>Small</Size>
                        <FakeCheckbox>
                            {isCheckedSmall && isCheckedBig ? <FaCheck /> : null}
                        </FakeCheckbox>
                        <CardCheckboxInput type="radio" name={`${src}`} />
                    </CardCheckbox>
                </Sizes>
            </PreviewCardBody>
            <PreviewCardFooter className="addToCart">Add to cart<FaCartPlus style={{ marginLeft: '5px' }} /></PreviewCardFooter>
        </PreviewCardWrapper>
    )
}