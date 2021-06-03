import React, {createContext, useState} from 'react'
import io from "socket.io-client";

const client = io()

export const SocketContext = createContext()

const Socket = (props) => {
    const [socket] = useState(client);

    return (
        <SocketContext.Provider value={socket}>
            {props.children}
        </SocketContext.Provider>
    )
}

export {Socket}