export const handleHighlight = (cardid, players, cards, settmpcards) => {
    if (cards.length === 0) return

    let winningPlayer = {id: 'unknown', name: 'unknown'}
    let tmp = []

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].matchid === cardid) {
            winningPlayer = {id: cards[i].player, name: players[cards[i].player].name}
            break
        }
    }

    for (let i = 0; i < cards.length; i++) {
        tmp.push({
            card: cards[i].card,
            matchid: cards[i].matchid,
            player: cards[i].player,
            playerName: players[cards[i].player].name,
            chosen: cards[i].player !== winningPlayer.id,
            revealed: true
        })
    }
    settmpcards([...tmp])
}

export const handlePlayedCards = (playedCards, settmpcards) => {
    if (playedCards.length === 0) {
        settmpcards([])
        return
    }
    settmpcards([...playedCards])

}
