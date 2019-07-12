const words = [
    'Bob',
    'awesome',
    'netology',
    'Hello',
    'kitty',
    'rock',
    'youtube',
    'popcorn',
    'cinema',
    'love',
    'javascript',
    'жизнь',
    'боль',
    'когда',
    'денег',
    'ноль'
  ]

function randomInteger( min, max ) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

function arraySimbol( array ) {
  if ( array instanceof Array ) {
    return array[randomInteger( 0, words.length - 1 )].split( '' );
  }
}

function contentHTML( element, array ) {
  let strHTML = '';
  array.forEach( (item) => {
    strHTML += `<span class="symbol">${item}</span>`;
  });
  element.innerHTML = '';
  element.innerHTML = strHTML;
}

function pressKey( event ) {

  event.preventDefault();
  if ( event.repeat ) { return };
  let divsHTML = word.querySelectorAll( '.symbol' );
  let strSimbolArr = simbols[countSimbol].toLowerCase();
  let strKeyboard = event.key.toLowerCase();

  if ( strSimbolArr === strKeyboard ) {
    divsHTML[countSimbol].classList.add( 'symbol_correct' );
    countSimbol++;
    if ( countSimbol >= simbols.length ) {
      setUp();
      countVictory++;
      document.querySelector( '.status__wins' ).textContent = countVictory;
    }
  }

  if ( strSimbolArr !== strKeyboard ) {
    divsHTML[countSimbol].classList.add( 'word_incorrect' );
    alert( 'Ошибка' );
    setUp();
    countDefeat++;
    document.querySelector( '.status__loss' ).textContent = countDefeat;
  }

  if ( countVictory >= 10 ) {
    alert( 'Победа' );
    reset();
    setUp();
  }

  if ( countDefeat >= 3 ) {
    alert( 'Поражение' );
    reset();
    setUp();
  }
}

function setUp() {
  simbols = arraySimbol( words );
  contentHTML( word, simbols );
  countSimbol = 0;
}

function reset() {
  countDefeat = 0;
  countVictory = 0;
  document.querySelector( '.status__loss' ).textContent = 0;
  document.querySelector( '.status__wins' ).textContent = 0;
}

let countSimbol = 0;
let countVictory = 0;
let countDefeat = 0;

let word = document.querySelector( '.word' );
let simbols = arraySimbol(words);
contentHTML( word, simbols );
document.addEventListener( 'keypress', pressKey);
