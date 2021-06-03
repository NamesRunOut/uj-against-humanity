import React, {useContext} from "react"
import {motion} from "framer-motion"
import {SettingsContext} from "../../hooks/Settings";

const item = {
    hidden: {x: 100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1
    }
}

const WhiteCard = ({card, commitFunction}) => {
    const [canDrag] = useContext(SettingsContext)

    if (card === undefined || card.sauce === undefined || card.card === undefined) return <></>
    return (
        <motion.div
            drag={!!canDrag}
            layout
            className='card'
            variants={item}
            whileHover={{scale: 1.1}}
            onClick={() => commitFunction(card.card.matchid, card.sauce.id)}>
            {card.sauce.text} [{card.card.matchid}]
        </motion.div>
    )
}

export default WhiteCard
