import React from "react";

import {motion} from "framer-motion"

const Scoreboard = ({players}) => {

    return (
        <motion.div id="scoreboard">
            {
                players.length === 0 ? <></> :
                    players.map(player => <motion.span key={`${player.id}1`}>
                        <motion.div className="playerScore">
                            <motion.div>
                                {player.name} {player.status}<br/>
                                Points: {player.points}
                                <motion.span style={{opacity: '0.2', marginLeft: '0.25em'}}>
                                    [{player.id}]
                                </motion.span>
                            </motion.div>
                        </motion.div>
                        <hr/>
                    </motion.span>)
            }
        </motion.div>
    );
}

export default Scoreboard
