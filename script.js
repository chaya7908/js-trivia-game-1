const TIME_TO_DISPLAY_Q_BEFORE_A = 6000;
const TIME_TO_WAIT_BEFORE_CHECK_ANSWER = 6000;
const TIME_TO_WAIT_BEFORE_CLOSE_CORRECT_ANSWER = 4000;
const TIME_TO_WAIT_BEFORE_CLOSE_WRONG_ANSWER = 2000;
const TIMEOUT_FOR_SINGLE_QUESTION = 10000;

const COLUMNS = [
  {
    id: 1,
    questions: [
      {
        questionId: 1,
        question: "של מי הילדים בסרטון הלחיים של חנות הצעצועים",
        answers: [
          { answer: "המנהלת", isCorrect: true },
          { answer: "המורה שיינדי רוזנפלד", isCorrect: false },
          { answer: "המורה חני גרוסמן", isCorrect: false }
        ]
      },
      {
        questionId: 2,
        question: "מה שם המנהלת?",
        answers: [
          { answer: "שירה כהן", isCorrect: true },
          { answer: "אילה לוי", isCorrect: false },
          { answer: "רותי פרץ", isCorrect: false }
        ]
      },
      {
        questionId: 3,
        question: "באיזה תאריך חוגגים יום העצמאות?",
        answers: [
          { answer: "ה' באייר", isCorrect: true },
          { answer: "כ' בתשרי", isCorrect: false },
          { answer: "י' באב", isCorrect: false }
        ]
      },
      {
        questionId: 4,
        question: "מי היה המורה של הכיתה הרביעית?",
        answers: [
          { answer: "המורה דינה", isCorrect: true },
          { answer: "המורה רינה", isCorrect: false },
          { answer: "המורה נועה", isCorrect: false }
        ]
      },
      {
        questionId: 5,
        question: "מהו פרס נובל?",
        answers: [
          { answer: "פרס מדעי בינלאומי", isCorrect: true },
          { answer: "פרס קולנוע", isCorrect: false },
          { answer: "פרס ספורט", isCorrect: false }
        ]
      },
      {
        questionId: 6,
        question: "באיזה גיל אפשר להתחיל לנהוג?",
        answers: [
          { answer: "17", isCorrect: true },
          { answer: "15", isCorrect: false },
          { answer: "20", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 2,
    questions: [
      {
        questionId: 7,
        question: "מה שמה של בירת ישראל?",
        answers: [
          { answer: "ירושלים", isCorrect: true },
          { answer: "תל אביב", isCorrect: false },
          { answer: "חיפה", isCorrect: false }
        ]
      },
      {
        questionId: 8,
        question: "איזה צבעים יש בקשת בענן?",
        answers: [
          { answer: "אדום, כתום, צהוב, ירוק, כחול, סגול", isCorrect: true },
          { answer: "כחול וצהוב", isCorrect: false },
          { answer: "ורוד ושחור", isCorrect: false }
        ]
      },
      {
        questionId: 9,
        question: "מהו מספר החודשים בשנה?",
        answers: [
          { answer: "12", isCorrect: true },
          { answer: "10", isCorrect: false },
          { answer: "15", isCorrect: false }
        ]
      },
      {
        questionId: 10,
        question: "מהו הערך של פאי?",
        answers: [
          { answer: "3.14159", isCorrect: true },
          { answer: "2.718", isCorrect: false },
          { answer: "1.618", isCorrect: false }
        ]
      },
      {
        questionId: 11,
        question: "כמה אותיות יש באלפבית העברי?",
        answers: [
          { answer: "22", isCorrect: true },
          { answer: "26", isCorrect: false },
          { answer: "30", isCorrect: false }
        ]
      },
      {
        questionId: 12,
        question: "מי צייר את המונה ליזה?",
        answers: [
          { answer: "לאונרדו דה וינצ'י", isCorrect: true },
          { answer: "פאבלו פיקאסו", isCorrect: false },
          { answer: "ואן גוך", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 3,
    questions: [
      {
        questionId: 13,
        question: "באיזה יום נופל יום כיפור?",
        answers: [
          { answer: "י' בתשרי", isCorrect: true },
          { answer: "ט' באב", isCorrect: false },
          { answer: "ח' בניסן", isCorrect: false }
        ]
      },
      {
        questionId: 14,
        question: "מי הוא ראש הממשלה הראשון של ישראל?",
        answers: [
          { answer: "דוד בן-גוריון", isCorrect: true },
          { answer: "יצחק רבין", isCorrect: false },
          { answer: "גולדה מאיר", isCorrect: false }
        ]
      },
      {
        questionId: 15,
        question: "איזה כלי מוזיקלי יש מיתרים?",
        answers: [
          { answer: "כינור", isCorrect: true },
          { answer: "חצוצרה", isCorrect: false },
          { answer: "תוף", isCorrect: false }
        ]
      },
      {
        questionId: 16,
        question: "כמה דקות יש בשעה?",
        answers: [
          { answer: "60", isCorrect: true },
          { answer: "100", isCorrect: false },
          { answer: "50", isCorrect: false }
        ]
      },
      {
        questionId: 17,
        question: "כמה ימים יש בשבוע?",
        answers: [
          { answer: "7", isCorrect: true },
          { answer: "5", isCorrect: false },
          { answer: "6", isCorrect: false }
        ]
      },
      {
        questionId: 18,
        question: "באיזה חודש חוגגים פסח?",
        answers: [
          { answer: "ניסן", isCorrect: true },
          { answer: "תשרי", isCorrect: false },
          { answer: "סיון", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 4,
    questions: [
      {
        questionId: 19,
        question: "מהו המאכל הלאומי של ישראל?",
        answers: [
          { answer: "חומוס", isCorrect: true },
          { answer: "בורגר", isCorrect: false },
          { answer: "פסטה", isCorrect: false }
        ]
      },
      {
        questionId: 20,
        question: "איזה ים נמצא ליד ישראל?",
        answers: [
          { answer: "הים התיכון", isCorrect: true },
          { answer: "הים הכספי", isCorrect: false },
          { answer: "הים השחור", isCorrect: false }
        ]
      },
      {
        questionId: 21,
        question: "מהי המהירות המותרת בכביש מהיר?",
        answers: [
          { answer: "110 קמ\"ש", isCorrect: true },
          { answer: "80 קמ\"ש", isCorrect: false },
          { answer: "150 קמ\"ש", isCorrect: false }
        ]
      },
      {
        questionId: 22,
        question: "באיזה אזור זמן ישראל נמצאת?",
        answers: [
          { answer: "GMT+2", isCorrect: true },
          { answer: "GMT-5", isCorrect: false },
          { answer: "GMT+1", isCorrect: false }
        ]
      },
      {
        questionId: 23,
        question: "מהו הריבוע של 3?",
        answers: [
          { answer: "9", isCorrect: true },
          { answer: "6", isCorrect: false },
          { answer: "12", isCorrect: false }
        ]
      },
      {
        questionId: 24,
        question: "מהו אורך נהר הנילוס?",
        answers: [
          { answer: "6,650 ק\"מ", isCorrect: true },
          { answer: "3,500 ק\"מ", isCorrect: false },
          { answer: "8,000 ק\"מ", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 5,
    questions: [
      {
        questionId: 25,
        question: "איזה חיה נחשבת למלך היער?",
        answers: [
          { answer: "אריה", isCorrect: true },
          { answer: "פיל", isCorrect: false },
          { answer: "טיגריס", isCorrect: false }
        ]
      },
      {
        questionId: 26,
        question: "כמה ימים יש בחודש פברואר?",
        answers: [
          { answer: "28 או 29", isCorrect: true },
          { answer: "30", isCorrect: false },
          { answer: "31", isCorrect: false }
        ]
      },
      {
        questionId: 27,
        question: "מה שם השפה הרשמית בישראל?",
        answers: [
          { answer: "עברית", isCorrect: true },
          { answer: "אנגלית", isCorrect: false },
          { answer: "ערבית", isCorrect: false }
        ]
      },
      {
        questionId: 28,
        question: "כמה חודשים יש בשנה עברית?",
        answers: [
          { answer: "12 או 13", isCorrect: true },
          { answer: "10", isCorrect: false },
          { answer: "11", isCorrect: false }
        ]
      },
      {
        questionId: 29,
        question: "מה הוא ההר הגבוה ביותר בעולם?",
        answers: [
          { answer: "הר האוורסט", isCorrect: true },
          { answer: "הר האלבורז", isCorrect: false },
          { answer: "הר ארארט", isCorrect: false }
        ]
      },
      {
        questionId: 30,
        question: "מה שם המפרץ בו נמצא אילת?",
        answers: [
          { answer: "מפרץ אילת", isCorrect: true },
          { answer: "מפרץ תל אביב", isCorrect: false },
          { answer: "מפרץ חיפה", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 6,
    questions: [
      {
        questionId: 31,
        question: "מהו מספר האיברים בגוף האדם?",
        answers: [
          { answer: "206", isCorrect: true },
          { answer: "100", isCorrect: false },
          { answer: "302", isCorrect: false }
        ]
      },
      {
        questionId: 32,
        question: "מהו המספר הזוגי הכי נמוך?",
        answers: [
          { answer: "2", isCorrect: true },
          { answer: "1", isCorrect: false },
          { answer: "0", isCorrect: false }
        ]
      },
      {
        questionId: 33,
        question: "מהו המטבע בישראל?",
        answers: [
          { answer: "שקל חדש", isCorrect: true },
          { answer: "דולר", isCorrect: false },
          { answer: "יורו", isCorrect: false }
        ]
      },
      {
        questionId: 34,
        question: "מהו הערך של המספר פאי?",
        answers: [
          { answer: "3.14159", isCorrect: true },
          { answer: "3.14", isCorrect: false },
          { answer: "3.5", isCorrect: false }
        ]
      },
      {
        questionId: 35,
        question: "מי ממציא מנורת החשמל?",
        answers: [
          { answer: "תומאס אדיסון", isCorrect: true },
          { answer: "אלברט איינשטיין", isCorrect: false },
          { answer: "ניקולה טסלה", isCorrect: false }
        ]
      },
      {
        questionId: 36,
        question: "איזה אזור נמצא דרומית לישראל?",
        answers: [
          { answer: "מצרים", isCorrect: true },
          { answer: "לבנון", isCorrect: false },
          { answer: "סוריה", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 7,
    questions: [
      {
        questionId: 37,
        question: "מהו מקור השוקולד?",
        answers: [
          { answer: "פולי קקאו", isCorrect: true },
          { answer: "חלב", isCorrect: false },
          { answer: "תמרים", isCorrect: false }
        ]
      },
      {
        questionId: 38,
        question: "מהו חמש של חמש?",
        answers: [
          { answer: "25", isCorrect: true },
          { answer: "10", isCorrect: false },
          { answer: "15", isCorrect: false }
        ]
      },
      {
        questionId: 39,
        question: "מהו הצבע של השמש?",
        answers: [
          { answer: "צהוב", isCorrect: true },
          { answer: "כחול", isCorrect: false },
          { answer: "אדום", isCorrect: false }
        ]
      },
      {
        questionId: 40,
        question: "מהי הבירה של גרמניה?",
        answers: [
          { answer: "ברלין", isCorrect: true },
          { answer: "מינכן", isCorrect: false },
          { answer: "פרנקפורט", isCorrect: false }
        ]
      },
      {
        questionId: 41,
        question: "מהו היבשת שבה נמצאת ישראל?",
        answers: [
          { answer: "אסיה", isCorrect: true },
          { answer: "אירופה", isCorrect: false },
          { answer: "אפריקה", isCorrect: false }
        ]
      },
      {
        questionId: 42,
        question: "מהו מספר שעות ביום?",
        answers: [
          { answer: "24", isCorrect: true },
          { answer: "12", isCorrect: false },
          { answer: "36", isCorrect: false }
        ]
      }
    ]
  }
];

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
    showAnswersPopup(questionId);

    // question timeout
    answerTimeOut = setTimeout(() => {
      toggleAnswersPopup(false);
      toggleFlipCard(questionId, false);
      card.classList.remove('active');
    }, TIMEOUT_FOR_SINGLE_QUESTION)
  }, TIME_TO_DISPLAY_Q_BEFORE_A);
}

function handleAnswerClick(questionId, isCorrect, element) {
  toggleFreezScreen(true);

  clearTimeout(answerTimeOut);
  const card = document.getElementById(questionId);

  element.classList.add('scale');
  setTimeout(() => {
    if (isCorrect) {
      playGameSound('success');
      blink(element, 'green');
      setTimeout(() => {
        toggleSuccess(true);
        setTimeout(() => {
          toggleSuccess(false);
        }, 2000);
      }, 1000);

      setTimeout(() => {
        toggleAnswersPopup(false);
        card.classList.remove('active');
        toggleFreezScreen(false);
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
  const currentQuestion = COLUMNS.map(c=> c.questions).flat().find(q => q.questionId === questionId);

  answersList.innerHTML = ``;
  for (const { answer, isCorrect } of shuffleArray(currentQuestion.answers)) {
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

function toggleSuccess(state) {
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

  COLUMNS.forEach((c) => {
    const column = document.createElement('div');
    column.className = 'column';
    
    const columnHeader = document.createElement('div');
    columnHeader.className = 'column-header swing';
    columnHeader.style = `--random-delay: ${Math.random() * 4}s`;
    columnHeader.innerHTML = `<img src="./columns/${c.id}.png">`;
    column.appendChild(columnHeader);

    const columnCards = document.createElement('div');
    columnCards.className = 'column-cards';
    column.appendChild(columnCards);

    c.questions.forEach((question) => {
      const card = document.createElement('div');
      card.className = 'card';
      card.id = question.questionId;
      card.innerHTML = `
          <div class="card-container" style="--random-delay: ${Math.random() * 4}s">
            <div class="card-background">
              <div class="zoom-out">
                <img class="text-image swing" src="./logo.png">
              </div>
            </div>
            <div class="card-face">
              <div class="question-text">${question.question}</div>
              <div class="question-answer">${question.answers.find(a => a.isCorrect).answer}</div>
            </div>
          </div>
        `;
      card.addEventListener('click', () => handleCardClick(question.questionId));
      columnCards.appendChild(card);
    });

    gridContainer.appendChild(column);
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
