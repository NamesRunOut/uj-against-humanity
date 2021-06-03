import React from "react"

import {motion} from "framer-motion"

const Chat = ({chat, writeMessage}) => {
    return (
        <>
            <motion.div>
                <motion.div id="chatLog">
                    {chat.map(message => <p>{message.date} {message.author}: {message.sauce}</p>)}
                </motion.div>
            </motion.div>
            <motion.div className="info_chat_input">
                <input id="chatInput" placeholder="Chat" aria-label="Chat"/>
                <button type="button" onClick={writeMessage}>Send</button>
            </motion.div>
        </>
    );
}

export default Chat
