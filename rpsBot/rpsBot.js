//Make a rock paper scissors bot

function rps() {
  //takes away all non-alphabet submissions and replaces them with an empty string using regex
  let action = prompt('Will you choose rock, paper or scissors?')
    .replace(/[^a-zA-Z]/gi, '')
    .toLowerCase()
    .trim();


    //psuedorandomly returns either 0, 1, or 2.
    let rps = Math.floor(Math.random() * 3);
    if (rps === 0) {
      rps = 'rock';
    } else if (rps === 1) {
      rps = 'paper';
    } else if (rps === 2) {
      rps = 'scissors';
    } else {
      alert('Oh dear, it seems we have an error.');
    }

    if (rps === action) {
      return rps();
    } else if (action === paper && rps === 'rock') {
      alert('You win!');
    } else if (action === paper && rps === 'scissors') {
      alert('You lose!');
    } else if (action === rock && rps === 'paper') {
      alert('You lose!');
    } else if (action === rock && rps === 'scissors') {
      alert('You win!');
    } else if (action === scissors && rps === 'paper') {
      alert('You win!');
    } else if (action === scissors && rps === 'rock') {
      alert('You lose!');
    } else {
      alert('Oh dear, it seems we have an error.');
    }
}
