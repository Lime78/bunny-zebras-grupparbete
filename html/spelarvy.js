import { words } from './svenska-ord.js'

// const viewContainer = document.querySelector('.view-container')
// const playContainer = document.querySelector('.play-container')
// const gamerContainer = document.querySelector('.gamer-container')
// const hangMan = document.querySelector('.hangman')
const scaffold = document.querySelector('#scaffold')
const head = document.querySelector('#head')
const body = document.querySelector('#body')
const arms = document.querySelector('#arms')
const legs = document.querySelector('#legs')
const ground = document.querySelector('#ground')
// const playerInput = document.querySelector('#player-input')
// const difficulty = document.querySelector('.difficulty')
// const normalBtn = document.querySelector('.normal')
// const theWord = document.querySelector('#the-word')
// const guesses = document.querySelector('#guesses')
// const underline = document.querySelector('.underline')
// const hidden = document.querySelector('.hidden')

// normalBtn.addEventListener('click', () => {
// 	playContainer.classList.add('hidden')
	
// 	theWord.style.visibility('hidden')
// 	theWord.classlist.add('hidden');
// })


// theWord = value av math.random(words)
// keyDown eller keyPress  för att dölja en bokstav i taget
// flippa koden och dölj ordet för att avslöja en bokstav i taget
// ordets längd skall vara minst tio tecken långt och vara kopplat till normal-knappen

//senare skall figuren avslöjas bit för bit för varje korrekt gissning
// senare skall varje knapptryckning visas i guesses
// alla ord skall konverteras till lowercase

const minWordLength = words.filter(word => word.length >= 10);
const theWord = document.querySelector('#the-word');
const randomIndex = Math.floor(Math.random() * minWordLength.length);
export const randomWord = minWordLength[randomIndex].toUpperCase();
const guesses = document.querySelector('#guesses')

function generateWord() {
	let hiddenLetters = Array(randomWord.length).fill('_');
	
	theWord.innerText = hiddenLetters.join(' ');
	console.log(theWord);
	
	document.addEventListener('keydown', (event) => {
	  const pressedKey = event.key.toUpperCase();
<<<<<<< HEAD
	  guesses.innerText += pressedKey 

=======
	  guesses.innerText += `${pressedKey}-`;
	  
>>>>>>> cfce81677eea97f3f1b1021f05737b74550b4f1b
	
	  if (randomWord.includes(pressedKey)) {
		randomWord.split('').forEach((char, index) => {
		  if (char === pressedKey) {
			hiddenLetters[index] = pressedKey;
		  }
		});
		theWord.innerText = hiddenLetters.join(' ');
	}
	else (!randomWord.includes(pressedKey)) 
	scaffold.style.opacity = '1';
});
// console.log('hej');  //tillfäligt bortaget
}


const playContainer = document.querySelector('.play-container')
const normalBtn = document.querySelector('.normal')
const playerInput = document.querySelector('#player-input')
const gamerContainer = document.querySelector('.gamer-container')

normalBtn.addEventListener('click', startGame );
const playerNameContainer = document.createElement('div');
playerNameContainer.className = 'page';
playerNameContainer.style.display = 'none';
gamerContainer.insertAdjacentElement('afterend', playerNameContainer);

function startGame() {

    const playerName = playerInput.value;
    if (playerName.trim().length < 2) {
        alert('Vänligen ange ditt namn innan du startar spelet. Minst två tecken.');
        return;
    }
	
    // playContainer.style.opacity = '0';

	fullBody.forEach(element => {
		element.style.display = "none"
	})
    playerNameContainer.innerHTML = `<p id="player-name">Spelare: ${playerName}</p>`;
    playerNameContainer.style.display = 'flex';

	generateWord()
}


const fullBody = [ground, scaffold, head, body, arms, legs]