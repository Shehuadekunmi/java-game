//  select all of the elements
const resetBtn =  document.querySelector('.again')
const num = document.querySelector('.number')
const checkbtn = document.querySelector('.check')
const msg = document.querySelector('.message')


// get users value


// generate a secret num btw 1 & 20 
let score = 20;
let highscore = 0; 
let secretNum = Math.trunc(Math.random() * 20 + 1) 

checkbtn.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        msg.textContent = 'No Number Entered'
    } else if (guess === secretNum) {
        msg.textContent = 'CORRECT NUMBER';
        document.querySelector('body').style.backgroundColor = 'green'
        num.textContent = secretNum
        // if score >= highscore
        if (score >= highscore){
          highscore = score;
          document.querySelector('.highscore').textContent = highscore
        }
    } else if (guess !== secretNum){
      if (score > 1) {
        msg.textContent = guess > secretNum ? 'TOO HIGH' : 'TOO LOW';
        score--;
        document.querySelector('.score').textContent = score
      } else {
        msg.textContent = 'YOU HAVE LOST';
        document.querySelector('.score').textContent = 0
        document.querySelector('body').backgroundColor = 'red'
      }
    }
})
console.log(secretNum);

// reset function = change boby to black, msg to start guessing, score to 20
// empty out the fields
// generate a random number


resetBtn.addEventListener('click', () => {
    score = 20

    document.querySelector('.again').style.backgroundColor = 'black'
    msg.textContent = 'start guessing...'
    document.querySelector('.score').textContent = 'score'
    document.querySelector('body').style.backgroundColor = 'black'
     secretNum = Math.trunc(Math.random() * 20 + 1)
})
    