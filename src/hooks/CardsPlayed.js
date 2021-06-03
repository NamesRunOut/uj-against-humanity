import React, {createContext, useContext, useEffect, useState} from 'react'
import {SocketContext} from "./Socket";
import {handleHighlight, handlePlayedCards} from "../functions/playedCards";

export const CardsPlayedContext = createContext([[],])

const CardsPlayed = (props) => {
    const socket = useContext(SocketContext)

    const [cards, setCards] = useState([])
    const [tmpcards, settmpcards] = useState([])

    useEffect(() => {
        setCards([...tmpcards])
    }, [tmpcards])

    useEffect(() => {
        socket.off('highlightCard').on('highlightCard', (cardid, players) => handleHighlight(cardid, players, cards, settmpcards))
    }, [cards])

    useEffect(() => {
        socket.on('playedCards', (playedCards, type) => handlePlayedCards(playedCards, settmpcards))
    }, [])

    return (
        <CardsPlayedContext.Provider value={[cards, setCards]}>
            {props.children}
        </CardsPlayedContext.Provider>
    )
}

export {CardsPlayed}
