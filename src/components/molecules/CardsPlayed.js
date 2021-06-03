import React, {useContext} from "react";
import Placeholders from "../atoms/Placeholders";
import CommitedCard from "../atoms/CommitedCard";
import {CardsPlayedContext} from "../../hooks/CardsPlayed";

const CardsPlayed = () => {
    const [cards] = useContext(CardsPlayedContext)

    return (
        <div id="cards">
            <Placeholders/>
            {cards.length === 0 ? <></> :
                cards.map(
                    (element) => {
                        if (!Array.isArray(element))
                            return <CommitedCard
                                key={element.matchid}
                                card={element}
                                chosen={!element.chosen}
                                revealed={element.revealed || false}
                                playerName={element.playerName || ''}/>
                    }
                )}
        </div>
    );
}

export default CardsPlayed
