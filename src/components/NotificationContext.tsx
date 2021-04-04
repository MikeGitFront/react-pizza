import React from 'react'

export interface defaultValue {


}

const defaultValue = {
    message: '',
    type: '',
}



export const NotificationContext = React.createContext<any>(defaultValue)