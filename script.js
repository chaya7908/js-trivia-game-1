const questions = [
  {
    questionId: 'question-1',
    answers: [
      { answer: "המרכזת", isCorrect: true },
      { answer: "המורה תעיזי", isCorrect: false },
      { answer: "המורה עסיס", isCorrect: false }
    ]
  },
  {
    questionId: 'question-2',
    answers: [
      { answer: "המורה חסיד", isCorrect: true },
      { answer: "המורה אדלשטיין", isCorrect: false },
      { answer: "המורה נוקראי", isCorrect: false }
    ]
  },
  {
    questionId: 'question-3',
    answers: [
      { answer: "המורה הררי רפול", isCorrect: true },
      { answer: "המורה אדלשטיין", isCorrect: false },
      { answer: "המורה יונה", isCorrect: false }
    ]
  },
  {
    questionId: 'question-4',
    answers: [
      { answer: "המורה תשובה", isCorrect: false },
      { answer: "המורה בן ששון", isCorrect: false },
      { answer: "המורה נוקראי", isCorrect: true },
    ]
  },
  {
    questionId: 'question-5',
    answers: [
      { answer: "המרכזת", isCorrect: false },
      { answer: "המורה בן ששון", isCorrect: true },
      { answer: "המורה מאושר", isCorrect: false }
    ]
  },
  {
    questionId: 'question-6',
    answers: [
      { answer: "המרכזת", isCorrect: false },
      { answer: "המורה תעיזי", isCorrect: false },
      { answer: "המורה מאושר", isCorrect: true }
    ]
  },
  {
    questionId: 'question-7',
    answers: [
      { answer: "המורה יונה", isCorrect: false },
      { answer: "המורה אדלשטיין", isCorrect: true },
      { answer: "המורה חסיד", isCorrect: false }
    ]
  },
  {
    questionId: 'question-8',
    answers: [
      { answer: "המורה רבי", isCorrect: false },
      { answer: "המורה יונה", isCorrect: false },
      { answer: "המורה עסיס", isCorrect: true }
    ]
  },
  {
    questionId: 'question-9',
    answers: [
      { answer: "המורה רבי", isCorrect: true },
      { answer: "המורה תעיזי", isCorrect: false },
      { answer: "המורה נוקראי", isCorrect: false }
    ]
  },
  {
    questionId: 'question-10',
    answers: [
      { answer: "המורה עסיס", isCorrect: false },
      { answer: "המורה תשובה", isCorrect: true },
      { answer: "המורה בן ששון", isCorrect: false }
    ]
  },
  {
    questionId: 'question-11',
    answers: [
      { answer: "המורה רבי", isCorrect: false },
      { answer: "המורה תשובה", isCorrect: false },
      { answer: "המורה מאירי", isCorrect: true }
    ]
  },
  {
    questionId: 'question-12',
    answers: [
      { answer: "המורה אדלשטיין", isCorrect: false },
      { answer: "המורה נוקראי", isCorrect: false },
      { answer: "המורה יונה", isCorrect: true },
    ]
  },
  {
    questionId: 'question-13',
    answers: [
      { answer: "המורה עסיס", isCorrect: false },
      { answer: "המורה תעיזי", isCorrect: true },
      { answer: "המורה מאושר", isCorrect: false }
    ]
  },
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
      path = './sounds/win.mp3';
      break;
    case 'wrong':
      path = './sounds/wrong.mp3';
      break;
    case 'flip':
      path = './sounds/tada.mp3';
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


  questions.forEach((question) => {
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
