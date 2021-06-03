import React, {createContext, useState} from 'react'

export const SettingsContext = createContext([false, undefined])

const Settings = (props) => {
    const [canDrag, setCanDrag] = useState(false)

    return (
        <SettingsContext.Provider value={[canDrag, setCanDrag]}>
            {props.children}
        </SettingsContext.Provider>
    )
}

export {Settings}
