import React, {useContext, useEffect, useState} from "react";
import {AnimateSharedLayout} from "framer-motion"

import Info from './info'

import {SocketContext} from '../../hooks/Socket'
import StartButton from "../atoms/StartButton";
import Points from "../molecules/Points";
import DragButton from "../atoms/DragButton";

const updateScroll = () => {
    let element = document.getElementById("chatLog")
    if (element !== null) element.scrollTop = element.scrollHeight;
}

const Navbar = () => {
    const socket = useContext(SocketContext)
    const [response, setResponse] = useState(false)
    const [showinfo, setShowinfo] = useState(false)
    const [players, setPlayers] = useState([])
    const [chat, setChat] = useState([])

    let sessionid = "not"

    function logKey(e) {
        if (e.keyCode === 13) {
            writeMessage();
        }
    }

    const writeMessage = () => {
        let element
        element = (document.getElementById("chatInput"))
        if (element !== null) {
            socket.emit('message', element.value);
            element.value = "";
        }
        updateScroll();
    }

    useEffect(() => {
        document.addEventListener('keydown', logKey)

        socket.on('message', function (message) {
            //displayMessage(message);
            setChat(chat => [...chat, message])
            updateScroll();
        })
        socket.on('recieveWhite', function (id, card, cardSauce) {
            setChat(chat => [...chat, {
                date: '',
                author: "white card",
                sauce: "[" + card.matchid + "] " + cardSauce.text
            }])
            updateScroll();
            /*displayMessage({
                date: '',
                author: "white card",
                sauce: "[" + card.matchid + "] " + cardSauce.text
            });*/
        })

        socket.on('sessionid', function (id) {
            sessionid = id
        });
        socket.on('state', function (playerList, players) {
            let tmp = []
            for (let id in playerList) {
                let p = players[playerList[id]]
                let name = p.name
                if (p.id === sessionid) name += " (you)"
                let status = ""
                if (p.tzar) status = "tzar"
                else if (!p.played) status = "playing..."
                tmp.push({
                    name: name,
                    status: status,
                    points: p.points,
                    id: playerList[id]
                })
            }
            setPlayers([...tmp])
        })

        socket.on("startEnable", function (data) {
            setResponse(false)
        })
        socket.on("startDisable", function (data) {
            setResponse(true)
        })
    }, [socket]);

    return (
        <div className="navbar" id="player">
            <StartButton response={response}/>
            <Points response={response}/>
            <DragButton/>
            <AnimateSharedLayout type="crossfade">
                {showinfo &&
                <Info close={() => setShowinfo(false)} players={players} chat={chat} writeMessage={writeMessage}/>}
            </AnimateSharedLayout>
            <button onClick={() => setShowinfo(showinfo => !showinfo)}>Open info</button>
        </div>
    );
}

export default Navbar
