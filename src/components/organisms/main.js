import React from "react";
import {CardsPlayed} from "../../hooks/CardsPlayed";

import BlackCard from "../atoms/BlackCard";
import CardsPlayedComponent from "../molecules/CardsPlayed";

const Main = () => {

    return (
        <div className="mainArea">
            <BlackCard/>
            <div>
                <CardsPlayed>
                    <CardsPlayedComponent/>
                </CardsPlayed>
            </div>
        </div>
    );
}

export default Main;
