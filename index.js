async function getBackgroundImg() {
    const response = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    const data = await response.json()
    console.log(data.urls.full)
    document.body.style.backgroundImage = `url("${data.urls.full}")`
}

getBackgroundImg()

// async function newDeck() {
//     const response = await fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//     const data = await response.json()
//     remainingText.textContent = `Remaining cards: ${data.remaining}`
//     deckId = data.deck_id
//     console.log(deckId)
// }