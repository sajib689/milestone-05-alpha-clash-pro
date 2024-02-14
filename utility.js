function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
 
function setBackgroundColor (elementById) {
    const element = document.getElementById(elementById);
    element.classList.add('bg-orange-400')
}

function getRandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * alphabets.length
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    return alphabet
}