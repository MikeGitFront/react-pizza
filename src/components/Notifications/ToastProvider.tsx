import React, { useState } from 'react'
import styled from 'styled-components'
import { NotificationContext } from '../NotificationContext'
import Toast from './Toast'
import { defaultValue } from '../NotificationContext'

const NotificationWrapper = styled.div`
    position:fixed;
    top:10px;
    left:10px;
    width:260px;
    z-index:1000;
`

interface ToastProviderProps {
    children?: any
}

export interface notifications {
    id: number
    type: string
    message: string
}

export type addNotification = {
    message: string
    type: string
}


const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<notifications[]>([
        // {
        //     id: Date.now(),
        //     type: "SUCCESS",
        //     message: "Да всё в порядке чё ты ёпта",
        // },
        // {
        //     id: Date.now(),
        //     type: "ERROR",
        //     message: "Слыш руки убрал от клавиатуры",
        // },
        // {
        //     id: Date.now(),
        //     type: "SUCCESS",
        //     message: "Ля, братан, убери валыну, так порешаем",
        // },
    ])

    const deleteNotification = (id: number) => {
        setNotifications(prev => prev.filter(item => item.id !== id))
    }

    const addNotification = (message: string, type: string) => {
        const obj: notifications = {
            id: Date.now(),
            type,
            message
        }
        setNotifications(prev => [...prev, obj])
    }

    return (
        <NotificationContext.Provider value={{ addNotification, deleteNotification }}>
            <NotificationWrapper>
                {notifications.map(note => {
                    return <Toast key={note.id} {...note} />
                })}
            </NotificationWrapper>
            {children}
        </NotificationContext.Provider>
    )
}

export default ToastProvider
