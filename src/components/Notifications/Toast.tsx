import React, { useCallback, useContext, useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { NotificationContext } from '../NotificationContext'

const appear = keyframes`
  0% {
    transform: translateX(-120%);
  }
  100% {
      transform:translateX(0);
  }
`

const disappear = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
      transform:translateX(-120%);
  }
`

const ToastItem = styled.div<ToastItemProps>`
    box-shadow:0px 0px 4px 2px black;
    // padding:10px 0 0 0;
    background-color:white;
    position:relative;
    z-index:1001;
    margin-bottom:8px;
    ${({ animation }) => animation ?
        css`
    animation:${appear} ease 0.4s forwards;` :
        css`
    animation:${disappear} ease 0.4s forwards;
    `}
`


const Line = styled.div<LineProps>`
    position:absolute;
    top:0;
    height:100%;
    z-index:-1;
    width:100%;
    background-color:${({ type }) => type === 'SUCCESS' ? 'lightgreen' : 'rgb(255,44,66)'};
`

interface ToastItemProps {
    animation: boolean
}

interface LineProps {
    type: string
}

interface ToastProps {
    message: string
    type: string
    id: number
}

const Toast: React.FC<ToastProps> = ({ message, id, type }) => {
    const [width, setWidth] = useState<number>(0)
    const [intervalID, setIntervalID] = useState<number>(0)
    const [appear, setAppear] = useState(true)
    const { deleteNotification } = useContext(NotificationContext)

    const timerHandler = () => {
        const timer: number = window.setInterval(() => {
            setWidth(prev => {
                if (prev < 100) {
                    return prev + 0.5
                }
                clearInterval(timer)
                return prev
            })
        }, 20)

        setIntervalID(timer)
    }

    const timerPauseHandler = useCallback(() => {
        window.clearInterval(intervalID)
    }, [intervalID])

    const closeToastHandler = useCallback(() => {
        timerPauseHandler()
        setAppear(false)
        setTimeout(() => {
            deleteNotification(id)
        }, 400)
    }, [timerPauseHandler])


    useEffect(() => {
        if (width === 100) {
            closeToastHandler()
        }
    }, [width, closeToastHandler])

    useEffect(() => {
        timerHandler()
    }, [])

    return (
        <ToastItem
            animation={appear}
            onMouseEnter={timerPauseHandler}
            onMouseLeave={timerHandler}
        >
            <div>
                <p style={{ margin: '0px', padding: '10px' }}>{message}</p>
            </div>
            <Line
                style={{ width: `${width}%` }}
                type={type}>
            </Line>
        </ToastItem>
    )
}

export default Toast

