function handleKeyBoardEvent(e) {
    const playerPress = e.key.toUpperCase();
    const currentAlphabet = document.getElementById('current-alphabet').innerText
    if(playerPress === currentAlphabet){
        const currentScoreElement = document.getElementById('score')
        continueGame()
        const currentScoreText = parseInt(currentScoreElement.innerText)
        const newScore = currentScoreText + 1
        currentScoreElement.innerText = newScore
        const currentLifeElement = document.getElementById('current-life')
        currentLifeElement.innerText = newScore
        
    } else{
        let currentLifeElement = document.getElementById('current-life')
        let currentLife = parseFloat(currentLifeElement.innerText)
        currentLife = currentLife - 1
        currentLifeElement.innerText = currentLife
    }
}
document.addEventListener('keyup', handleKeyBoardEvent)

function continueGame(){
   const alphabet = getRandomAlphabet()
   const currentAlphabet = document.getElementById('current-alphabet')
   currentAlphabet.innerText = alphabet
    //    set the background color
    setBackgroundColor(alphabet)
}

function play() {
    hideElementById('home-screen')
    showElementById('playground')
    continueGame()
}

document.getElementById('total-score').addEventListener('click', function(){
   
    hideElementById('playground')
    showElementById('final-score')
    const finalTotalScore = document.getElementById('final-total-score')
    let currentLifeElement = document.getElementById('current-life')
    const result = parseFloat(currentLifeElement.innerText)
    finalTotalScore.innerText = result

})