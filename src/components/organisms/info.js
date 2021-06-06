import React from "react"

import Scoreboard from "../molecules/Scoreboard";
import Chat from "../molecules/Chat";
import Actions from '../molecules/Actions'

import {AnimatePresence, motion} from "framer-motion"

const Info = ({close, players, chat, writeMessage}) => {

    return (
        <AnimatePresence>
            <motion.div
                initial={{opacity: 0, x: -200}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -200}}
                transition={{duration: 0.2, delay: 0}}
                style={{pointerEvents: "auto"}}
                className="overlay"
                layout>
                <Actions/>
                <motion.div className="info_score">
                    <motion.div className="title">Tabela wyników
                        <hr/>
                    </motion.div>
                    <Scoreboard players={players}/>
                </motion.div>
                <motion.div className="info_chat">
                    <Chat chat={chat} writeMessage={writeMessage}/>
                </motion.div>
                <motion.button onClick={() => close()}>
                    Zamknij
                </motion.button>
            </motion.div>
        </AnimatePresence>
    );
}

export default Info
