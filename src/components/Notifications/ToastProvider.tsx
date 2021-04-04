import React from 'react'
import styled from 'styled-components'
import Toast from './Toast'

const NotificationWrapper = styled.div`
    position:fixed;
    top:10px;
    left:10px;
    width:260px;
    z-index:1000;
`

interface ToastProviderProps {
    children: any
}

interface notifications {
    id: number
    type: string
    message: string
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const notifications: notifications[] = [
        {
            id: Date.now(),
            type: "SUCCESS",
            message: "Да всё в порядке чё ты ёпта",
        },
        {
            id: Date.now(),
            type: "ERROR",
            message: "Слыш руки убрал от клавиатуры",
        },
        {
            id: Date.now(),
            type: "SUCCESS",
            message: "Ля, братан, убери валыну, так порешаем",
        },
    ]

    return (
        <div>
            <NotificationWrapper>
                {notifications.map(note => {
                    return <Toast key={note.id} {...note} />
                })}
            </NotificationWrapper>
            {children}
        </div>
    )
}

export default ToastProvider
