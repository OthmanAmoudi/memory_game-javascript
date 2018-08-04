const cards = {
  box1: 'box2',
  box2: 'box1',
  box3: 'box4',
  box4: 'box3',
  box5: 'box6',
  box6: 'box5',
  box7: 'box8',
  box8: 'box7',
  box9: 'box10',
  box10: 'box9',
  box11: 'box12',
  box12: 'box11',
  box13: 'box14',
  box14: 'box13',
  box15: 'box16',
  box16: 'box15',
  box17: 'box18',
  box18: 'box17'
};

const box = Array.from(document.querySelectorAll('.box'));
let last_flipped = [];

function flipOnClick(e) {
  const element = e.target;
  last_flipped.push(element);
  element.classList.add('flipped');
  console.log(last_flipped.length);
  compareFlipped(last_flipped);
}

function compareFlipped(array) {
  if (array.length > 2) {
    array.forEach(el => el.classList.remove('flipped'));
    last_flipped = [];
  }

  if (array.length == 2) {
    console.log('must check now');
    const card1 = array[0].classList[1];
    const card2 = array[1].classList[1];
    console.log(cards[card1], cards[card2]);
    if (cards[card1] == card2 || cards[card2] == card1) {
      console.log('Yay its a match');
      last_flipped = [];
    } else {
      setTimeout(() => {
        array.forEach(el => el.classList.remove('flipped'));
        last_flipped = [];
      }, 700);
    }
  }
}

box.forEach(el => el.addEventListener('click', flipOnClick));
