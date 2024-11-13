const TIME_TO_DISPLAY_Q_BEFORE_A = 6000;
const TIME_TO_WAIT_BEFORE_CHECK_ANSWER = 6000;
const TIME_TO_WAIT_BEFORE_CLOSE_CORRECT_ANSWER = 4000;
const TIME_TO_WAIT_BEFORE_CLOSE_WRONG_ANSWER = 2000;
const TIMEOUT_FOR_SINGLE_QUESTION = 17000;
const TIME_FOR_FEEDBACK = 16000;
const TARGET_DATE = new Date('2027-11-15');

// Check if the game is available
const today = new Date();
today.setHours(0, 0, 0, 0);
if (today > TARGET_DATE) {
  alert('לא ניתן לטעון את המשחק');
  throw new Error('error');
}

const COLUMNS = [
  {
    id: 1,
    questions: [
      {
        questionId: 'question-1',
        image: '1.jpg',
        answers: [
          { answer: "המורה אטיאס", isCorrect: true },
          { answer: "המורה שטרן", isCorrect: false },
          { answer: "המורה רבי", isCorrect: false }
        ],
      },
      {
        questionId: 'question-2',
        image: '2.jpg',
        answers: [
          { answer: "המורה שטרן", isCorrect: true },
          { answer: "מיכל מזרחי כיתה א'1", isCorrect: false },
          { answer: "שיראל בכר כיתה א'1", isCorrect: false }
        ],
      },
      {
        questionId: 'question-3',
        image: '3.jpg',
        answers: [
          { answer: "המורה מאירי", isCorrect: true },
          { answer: "רחל דיוה כיתה א'1", isCorrect: false },
          { answer: "בתיה הראל א'3", isCorrect: false }
        ],
      },
      {
        image: '4.jpg',
        answers: [
          { answer: "המרכזת תחי'", isCorrect: true },
          { answer: "המורה אטיאס", isCorrect: false },
          { answer: "המורה הררי רפול", isCorrect: false }
        ],
      },
      {
        questionId: 'question-5',
        image: '5.jpg',
        answers: [
          { answer: "יפי בן שמואל כיתה א'1", isCorrect: true },
          { answer: "המורה רבי", isCorrect: false },
          { answer: "רות כהן כיתה א'2", isCorrect: false }
        ],
        feedback: "יפי בן שמואל: יש לך עקרונות חזקים במיוחד, ואת לא נותנת לאף אחת לעמוד בדרכך... עוד תגיעי רחוק!"
      },
      {
        questionId: 'question-6',
        image: '6.png',
        answers: [
          { answer: "רבקה אמינוב כיתה א'2", isCorrect: true },
          { answer: "יעל מזרחי כיתה א'1", isCorrect: false },
          { answer: "אבישג ימיני כיתה א'1", isCorrect: false }
        ],
        feedback: "רבקה אמינוב: את מיוחדת! יש לך הארת פנים נדירה! שנותנת מצב רוח טוב לכל היום!!"
      },
      {
        questionId: 'question-7',
        image: '7.jpg',
        answers: [
          { answer: "עדי שחר כיתה א'3", isCorrect: true },
          { answer: "רות יחיאל כיתה א'3", isCorrect: false },
          { answer: "רבקה אמינוב כיתה א'2", isCorrect: false }
        ],
        feedback: "עדי שחר: הדרך ארץ שלך מעוררת השתאות, ממש!!"
      },
      {
        questionId: 'question-8',
        image: '8.jpg',
        answers: [
          { answer: "שרה חמו כיתה א'3", isCorrect: true },
          { answer: "לאה חיימוב כיתה א'1", isCorrect: false },
          { answer: "המורה הררי רפול", isCorrect: false }
        ],
        feedback: "שרה חמו: רצינו לספר לך שרואים את זה, מאחורי הקלעים... שאת נשארת לסדר ולארגן אחרי התכנית... זה מראה על מידות טובות במיוחד!! תודה בשם כולנו!"
      },
      {
        questionId: 'question-9',
        image: '9.jpg',
        answers: [
          { answer: "אילה חמו כיתה א'3", isCorrect: true },
          { answer: "מיכל בביוף כיתה א'2", isCorrect: false },
          { answer: "הודיה טל כיתה א'3", isCorrect: false }
        ],
        feedback: "אילה חמו: התודה שלך למורה בסוף כל שיעור מחממת את הלב! ונותנת כח!!"
      },
      {
        questionId: 'question-10',
        image: '10.jpg',
        answers: [
          { answer: "יהודית טביב כיתה א'1", isCorrect: true },
          { answer: "תמר שלמה כיתה א'1", isCorrect: false },
          { answer: "הדסה גדליה כיתה א'2", isCorrect: false }
        ],
        feedback: 'יהודית טביב: צל"ש! אפילו שהנסיעה באוטובוס ארוכה, וקשה להגיע מרחוק בזמן, את עומדת בזמנים בצורה יוצאת מן הכלל'
      },
      {
        questionId: 'question-11',
        image: '11.jpg',
        answers: [
          { answer: "מיכל מזרחי כיתה א'2", isCorrect: true },
          { answer: "עדי שחר כיתה א'3", isCorrect: false },
          { answer: "רחל עמבר כיתה א'2", isCorrect: false }
        ],
        feedback: 'מיכל מזרחי: מגיע לך צל"ש על העזרה התמידית שלך לכולן. תמיד את שמה לב מי צריכה עזרה, ואת יודעת לעשות את זה על הצד הכי טוב שיש!!'
      },
      {
        questionId: 'question-12',
        image: '12.jpg',
        answers: [
          { answer: "תמר בהרי כיתה א'2", isCorrect: true },
          { answer: "בתיה הראל כיתה א'3", isCorrect: false },
          { answer: "המורה אטיאס", isCorrect: false }
        ],
        feedback: 'תמר בהרי: מגיע לך צל"ש על העין הטובה שלך! את רואה בכל אחת תמיד רק את הטוב !!'
      },
      {
        questionId: 'question-13',
        image: '13.jpg',
        answers: [
          { answer: "רחל דיוה כיתה א '1", isCorrect: true },
          { answer: "הדסה גדליה כיתה א'2", isCorrect: false },
          { answer: "תמר שלמה כיתה א'1", isCorrect: false }
        ],
        feedback: 'רחל דיוה: התפילה שלך מיוחדת! לראות אותך מתפללת, זה מחייב את כולנו!'
      },
    ]
  },
];

const findQuestionById = (questionId) => COLUMNS.map(c=> c.questions).flat().find(q => q.questionId === questionId);

const hasColumns = COLUMNS.length > 1;

const gameStartSound = new Audio('./sounds/start-game.mp3');
const gameBgSound = new Audio('./sounds/game.mp3');
gameBgSound.loop = true;

let answerTimeOut;

function handleCardClick(questionId) {
  const card = document.getElementById(questionId);
  if (card.classList.contains('flipped')) return;
  
  card.classList.add('active');
  toggleFreezScreen(true);
  toggleFlipCard(questionId, true);

  setTimeout(() => {
    const opened = showAnswersPopup(questionId);
    if (!opened) {
      toggleAnswersPopup(false);
    }

    // question timeout
    answerTimeOut = setTimeout(() => {
      toggleAnswersPopup(false);
      toggleFlipCard(questionId, false);
      card.classList.remove('active');
      if (!opened) {
        toggleFlipCard(questionId, true);
      }
    }, TIMEOUT_FOR_SINGLE_QUESTION)
  }, TIME_TO_DISPLAY_Q_BEFORE_A);
}

function handleAnswerClick(questionId, isCorrect, element) {
  toggleFreezScreen(true);

  clearTimeout(answerTimeOut);
  const card = document.getElementById(questionId);
  const question = findQuestionById(questionId);

  element.classList.add('scale');
  setTimeout(() => {
    if (isCorrect) {
      playGameSound('success');
      blink(element, 'green');
      setTimeout(() => {
        toggleSuccess(true, questionId);
        setTimeout(() => {
          toggleSuccess(false);
        }, 2000);
      }, 1000);

      setTimeout(() => {
        toggleAnswersPopup(false);
        card.classList.remove('active');
        toggleFreezScreen(false);
        
        // show feedback
        setTimeout(() => {
          if(question.feedback) toggleFeedbackPopup(true, question.feedback);
          setTimeout(() => {
            toggleFeedbackPopup(false);
          }, TIME_FOR_FEEDBACK);
        }, 500);
      
      }, TIME_TO_WAIT_BEFORE_CLOSE_CORRECT_ANSWER);
    } else {
      playGameSound('wrong');
      blink(element, 'red');
      setTimeout(() => {
        toggleAnswersPopup(false);
        card.classList.remove('active');
        toggleFlipCard(questionId, false);
        toggleFreezScreen(false);
      }, TIME_TO_WAIT_BEFORE_CLOSE_WRONG_ANSWER);
    }
  }, TIME_TO_WAIT_BEFORE_CHECK_ANSWER);
}

function showAnswersPopup(questionId) {
  toggleFreezScreen(false);
  toggleAnswersPopup(true);

  const answersList = document.querySelector('.answers-popup-content .answers-list');
  const currentQuestion = findQuestionById(questionId);

  if (currentQuestion.answers.length === 0) return false;

  answersList.innerHTML = ``;
  for (const { answer, isCorrect } of shuffleArray(currentQuestion.answers)) {
    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer';
    answerContainer.innerHTML = answer;
    answerContainer.addEventListener('click', () => handleAnswerClick(questionId, isCorrect, answerContainer));

    answersList.appendChild(answerContainer);
  }

  return true;
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

function toggleFeedbackPopup(state, feedback = null) {
  const popup = document.querySelector('.feedback-popup');
  if (state) {
    const feedbackContent = document.querySelector('.feedback-popup .feedback-popup-content');
    feedbackContent.innerHTML = feedback;
    popup.style.display = 'flex';
    playGameSound('feedback', true);
  } else {
    popup.style.display = 'none';
  }
};

function toggleSuccess(state) {
  const confetti = document.querySelector('.confetti');

  if (state) {
    confetti.style.display = 'block';
  } else {
    confetti.style.display = 'none';
  }
};

function playGameSound(type, pauseBg = false) {
  if (pauseBg) {
    gameBgSound.pause();
  } else {
    gameBgSound.volume = 0.1;
  }

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
    case 'feedback':
      path = './sounds/claps.mp3';
      break;
    default:
      break;
  }
  var audio = new Audio(path);
  audio.play();
  audio.onended = () => {
    console.log('gameBgSound.volume = 0.5;')
    gameBgSound.volume = 0.5;
    gameBgSound.play();
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

  COLUMNS.forEach((c) => {
    let cardsContainer = gridContainer;

    if (hasColumns) {
      gridContainer.classList.add('columns-grid');
      const column = document.createElement('div');
      column.className = 'column';
      const columnHeader = document.createElement('div');
      columnHeader.className = 'column-header swing';
      columnHeader.style = `--random-delay: ${Math.random() * 4}s`;
      columnHeader.innerHTML = `<img src="./columns/${c.id}.png">`;
      column.appendChild(columnHeader);
      
      cardsContainer = document.createElement('div');
      cardsContainer.className = 'column-cards';
      column.appendChild(cardsContainer);
      gridContainer.appendChild(column);
    }

    shuffleArray(c.questions).forEach((question) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.id = question.questionId;
      const isImg = !!question.image;
      card.innerHTML = `
          <div class="card-container" style="--random-delay: ${Math.random() * 4}s">
            <div class="card-background">
              <div class="zoom-out">
                <img class="text-image swing" src="./logo.png">
              </div>
            </div>
            <div class="card-face">
              <div class="question-${isImg ? 'img' : 'text'}">${isImg ? `<img src="question-images/${question.image}"/>` : question.question}</div>
              <div class="question-answer">${question.answers.find(a => a.isCorrect)?.answer || ''}</div>
            </div>
          </div>
        `;
      card.addEventListener('click', () => handleCardClick(question.questionId));
      cardsContainer.appendChild(card);
    });
  });
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

document.addEventListener('click', startGame);
