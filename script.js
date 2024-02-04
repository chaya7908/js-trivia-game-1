const questions = [
  {
    questionId: 'question-1',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-2',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-3',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-4',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-5',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-6',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-7',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-8',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-9',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-10',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-11',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-12',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-13',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  },
  {
    questionId: 'question-14',
    answers: [
      { answer: "תשובה 1", isCorrect: false },
      { answer: "תשובה 2", isCorrect: true },
      { answer: "תשובה 3", isCorrect: false }
    ]
  }
];

const gameStartSound = new Audio('./sounds/start-game.mp3');
const gameBgSound = new Audio('./sounds/game.mp3');
gameBgSound.loop = true;

function handleCardClick(questionId) {
  const card = document.getElementById(questionId);
  card.classList.add('active');

  toggleFreezScreen(true);
  toggleFlipCard(questionId, true);

  setTimeout(() => {
    showAnswersPopup(questionId);
  }, 3000);
}

function handleAnswerClick(questionId, isCorrect, element) {
  const card = document.getElementById(questionId);

  element.classList.add('scale');
  setTimeout(() => {
    if (isCorrect) {
      playGameSound('success');
      blink(element, 'green');
      setTimeout(() => {
        toggleConfetti(true);
        setTimeout(() => {
          toggleConfetti(false);
        }, 2000);
      }, 1000);

      setTimeout(() => {
        toggleAnswersPopup(false);
        card.classList.remove('active');
      }, 2000);
    } else {
      playGameSound('wrong');
      blink(element, 'red');
      setTimeout(() => {
        toggleAnswersPopup(false);
        card.classList.remove('active');
        toggleFlipCard(questionId, false);
      }, 2000);
    }
  }, 2000);
}

function showAnswersPopup(questionId) {
  toggleFreezScreen(false);
  toggleAnswersPopup(true);

  const answersList = document.querySelector('.answers-popup-content .answers-list');
  const currentQuestion = questions.find(q => q.questionId === questionId);

  answersList.innerHTML = ``;
  for (const { answer, isCorrect } of currentQuestion.answers) {
    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer';
    answerContainer.innerHTML = answer;
    answerContainer.addEventListener('click', () => handleAnswerClick(questionId, isCorrect, answerContainer));

    answersList.appendChild(answerContainer);
  }
}

function toggleFlipCard(questionId, state) {
  const card = document.getElementById(questionId);
  if (state) {
    playGameSound('flip');
    card.classList.add('flipped');
  } else {
    card.classList.remove('flipped');
  }
}

function toggleFreezScreen(state) {
  const backdrop = document.querySelector('.backdrop');
  if (state) {
    backdrop.classList.remove('hidden');
  } else {
    backdrop.classList.add('hidden');
  }
}

function toggleAnswersPopup(state) {
  const popup = document.querySelector('.answers-popup');
  if (state) {
    popup.style.display = 'flex';
  } else {
    popup.style.display = 'none';
  }
};

function toggleConfetti(state) {
  const popup = document.querySelector('.confetti');
  if (state) {
    popup.style.display = 'block';
  } else {
    popup.style.display = 'none';
  }
};

function playGameSound(type) {
  gameBgSound.volume = 0.1;
  let path = '';
  switch (type) {
    case 'success':
      path = './sounds/win-2.mp3';
      break;
    case 'wrong':
      path = './sounds/wrong-2.mp3';
      break;
    case 'flip':
      path = './sounds/tada-1.mp3';
      break;
    default:
      break;
  }
  var audio = new Audio(path);
  audio.play();
  audio.onended = () => {
    gameBgSound.volume = 0.5;
  }
};

function blink(element, color) {
  element.classList.add(`blink-${color}`);
}

function startGame() {
  document.removeEventListener('click', startGame);
  const gridContainer = document.querySelector('.grid-container');

  gameStartSound.play();
  gridContainer.classList.add('animate')
  setTimeout(() => {
    gameStartSound.pause();
    gameBgSound.volume = 0.5;
    gameBgSound.play();
    gridContainer.classList.remove('animate')
  },21000);


  questions.forEach((question, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = question.questionId;
    card.innerHTML = `
        <div class="card-container">
          <div class="card-background">
            <img src="./card_bg.jpg">
          </div>
          <div class="card-face">
            <img src="./question-images/${question.questionId}.png">
          </div>
        </div>
      `;
    card.addEventListener('click', () => handleCardClick(question.questionId));
    gridContainer.appendChild(card);
  });
}

document.addEventListener('click', startGame);
