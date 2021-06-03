import React, {useContext} from "react";

import {SocketContext} from '../../hooks/Socket'

const StartButton = ({response}) => {
    const socket = useContext(SocketContext)

    const startGame = () => {
        socket.emit('start');
    }

    return (
        <button type="button" id="startButton" onClick={startGame} disabled={response}>START</button>
    );
}

export default StartButton
