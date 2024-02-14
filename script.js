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