import React, {useContext} from 'react';

import Navbar from '../components/organisms/navbar'
import Main from '../components/organisms/main'
import Cards from '../components/organisms/cards'

import {SocketContext} from '../hooks/Socket'
import {PlayerCards} from '../hooks/PlayerCards'
import {Settings} from "../hooks/Settings"

let nickname = "unknown";

const Homepage = () => {
    const socket = useContext(SocketContext)

    window.onload = function () {
        socket.emit('new player');
        nickname = prompt("Please enter your nickname", "") || "unknown";
        socket.emit('updateName', nickname);
    };

    window.onbeforeunload = closingCode;

    function closingCode() {
        let date = new Date();
        let input = {
            date: "[" + String(date.getHours()).padStart(2, "0") + ":"
                + String(date.getMinutes()).padStart(2, "0") + ":"
                + String(date.getSeconds()).padStart(2, "0") + "]",
            author: nickname,
            sauce: "leaves the game"
        }
        socket.emit('message', input);
        socket.emit('leaverTrigger');
        return null;
    }

    return (
        <div id="wrapper">
            <Settings>
                <Navbar/>
                <Main/>
                <PlayerCards>
                    <Cards/>
                </PlayerCards>
            </Settings>
        </div>
    );
}

export default Homepage;
