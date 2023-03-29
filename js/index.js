const form = document.getElementById ('form');
form.addEventListener ('submit', handleSubmit);

const statusTitle = document.getElementById ('status');
const attempt = document.getElementById ('attempt');
const inputValue = document.getElementById ('kick');
const result = document.getElementById ('result');
const btnRestart = document.getElementById ('btnRestart');

const GuessNumber = {
  max: 10,
  attemptsNumber: 0,
  numberDraw: function() {
    return Math.round(Math.random()*this.max);
  },
  showButtonRestart: function() {
    btnRestart.style.display = 'flex';
  },
  clearInput: function () {
    inputValue.value = '';
  },

  updateAttempt: function(attempt, value) {
    attempt.innerHTML = 'Tentativa: ' + value;
  },

  correctAnswear: function() {
    this.showButtonRestart();
    statusTitle.innerHTML = 'Parabéns, voce acertou!';   
    statusTitle.classList.remove('incorrect-answear');
    statusTitle.classList.add('status-correct');

    result.classList.remove('result-box-default');
    result.classList.add('result-correct-answear');

    this.clearInput();
  },

  incorrectAnswear: function(message) {
    statusTitle.innerHTML = message;
    statusTitle.classList.add('incorrect-answear');

    this.clearInput();
  },    

};

const numberDraw = GuessNumber.numberDraw();  

    function handleSubmit (e){
        e.preventDefault(); 

        const kick = inputValue.value;
        
        if (!kick) {
            alert('Digite algum valor!');
            return;
        }

        GuessNumber.updateAttempt(attempt, ++GuessNumber.attemptsNumber);

        if (numberDraw == kick) {
            GuessNumber.correctAnswear();
        } else if (numberDraw > kick) {
           GuessNumber.incorrectAnswear('O numero é maior!');
        } else if (numberDraw < kick){
            GuessNumber.incorrectAnswear('O numero é menor');
        }
    };

    function restartGamer (){
        document.location.reload(true);
    }