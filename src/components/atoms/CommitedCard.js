import React, {useContext} from "react"
import {SocketContext} from "../../hooks/Socket";

const CommitedCard = ({
                          card,
                          playerName,
                          chosen,
                          revealed
                      }) => {
    const socket = useContext(SocketContext)

    const tzarPicked = (cardid) => {
        if (revealed) return
        socket.emit('tzarPicked', cardid);
    }

    return <div
        key={card.matchid}
        className="biggerCard"
        onClick={() => tzarPicked(card.matchid)}
        style={{opacity: chosen ? '1' : '0.5'}}>
        {card.card.text} {revealed ? `[${playerName}]` : ''}
    </div>
}

export default CommitedCard
