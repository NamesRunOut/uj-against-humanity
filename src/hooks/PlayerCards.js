import React, {createContext, useContext, useEffect, useState} from 'react'
import {SocketContext} from "./Socket";

export const PlayerCardsContext = createContext([])

const PlayerCards = (props) => {
    const socket = useContext(SocketContext)

    const [whiteCards, setWhiteCards] = useState([])
    const [message, setMessage] = useState(null)
    const [loader, setLoader] = useState(false)

    const [commit, setCommit] = useState({
        canCommit: true,
        commitCount: 0
    })

    const [tmp, setTmp] = useState({
        card: {
            cardid: -1,
            matchid: -1
        },
        sauce: {
            id: -1,
            text: "Example Card",
        }
    })

    const cardCommited = (cardid, cardSauceid) => {
        let tmpWhite = [...whiteCards]
        if (tmpWhite.length === 0 || !commit.canCommit) return

        if (commit.commitCount >= 0)
            setCommit({
                canCommit: false,
                commitCount: commit.commitCount
            })
        else
            setCommit({
                canCommit: commit.canCommit,
                commitCount: commit.commitCount + 1
            })

        for (let i = 0; i < tmpWhite.length; i++) {
            if (tmpWhite[i].card === undefined) {
                tmpWhite.splice(i, 1)
                continue
            }
            if (cardid === tmpWhite[i].card.matchid)
                tmpWhite.splice(i, 1)
        }
        setWhiteCards([...tmpWhite])
        socket.emit('cardCommited', cardid, cardSauceid);
    }

    useEffect(() => {
        tmp.card.matchid !== -1 && setWhiteCards([...whiteCards, tmp])
    }, [tmp]);

    useEffect(() => {
        socket.on('recieveWhite', function (id, card, cardSauce) {
            setTmp({card: card, sauce: cardSauce})
        })

        socket.on('loadloader', function (number) {
            setLoader(true)
            setMessage(null)
        })

        socket.on('unloadloader', function (number) {
            setLoader(false)
        })

        socket.on('tzarTurn', function () {
            setMessage('You are the tzar, pick a card')
            setCommit({
                canCommit: false,
                commitCount: commit.commitCount
            })
        })

        socket.on('playerWait', function () {
            setMessage('Tzar is picking a card')
            setCommit({
                canCommit: false,
                commitCount: commit.commitCount
            })
        })

        socket.on('blockTzar', function (tzarid) {
            setMessage('You are the tzar')
            setCommit({
                canCommit: false,
                commitCount: commit.commitCount
            })
        })

        socket.on('enableCards', function () {
            setMessage(null)
            setCommit({
                canCommit: true,
                commitCount: 0
            })
        })

        socket.on('clearBoard', function () {
            setWhiteCards([])
        })

        socket.on("startDisable", function (data) {
            setCommit({
                canCommit: true,
                commitCount: 0
            })
        })
    }, [socket]);

    return (
        <PlayerCardsContext.Provider value={[whiteCards, setWhiteCards, loader, message, cardCommited]}>
            {props.children}
        </PlayerCardsContext.Provider>
    )
}

export {PlayerCards}
