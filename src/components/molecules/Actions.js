import React, {useContext, useState} from "react"

import {SocketContext} from '../../hooks/Socket'

const Actions = () => {
    const socket = useContext(SocketContext)
    const [canSkip, setCanSkip] = useState(true)

    const reroll = () => {
        socket.emit('reroll');
    }

    const skip = () => {
        if (!canSkip) return;
        setCanSkip(false)
        socket.emit('skipBlack');
        setTimeout(function () {
            setCanSkip(true)
        }, 30000)
    }

    return (
        <>
            <button type="button" onClick={reroll}>Wylosuj ponownie karty</button>
            <button type="button" onClick={skip} id="skipButton">Pomiń aktualną czarną kartę</button>
        </>
    );
}

export default Actions
