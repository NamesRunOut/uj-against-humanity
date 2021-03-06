import React, {useContext, useEffect, useState} from "react"
import {SocketContext} from '../../hooks/Socket'

const BlackCard = () => {
    const socket = useContext(SocketContext)
    const [black, setBlack] = useState({
        id: 0,
        text: 'Pytania będą pojawiać się tutaj, odpowiadaj na nie jedną białą kartą',
    })

    useEffect(() => {
        socket.on('blackCard', (card) => {
            setBlack({
                id: card.id,
                text: card.text
            })
        });
    }, [socket]);

    return (
        <div id="blackCard">
            <div className="biggerCard blackCard">
                {black.text}
            </div>
        </div>
    );
}

export default BlackCard
