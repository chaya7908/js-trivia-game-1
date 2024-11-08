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
        questionId: 'question-1',
        question: 'כמה פעמים גולי גליקזאהן הייתה בים השנה?',
        answers: [
          { answer: "לא ידוע", isCorrect: true },
          { answer: "אף פעם", isCorrect: false },
          { answer: "7 פעמים", isCorrect: false }
        ]
      },
      {
        questionId: 'question-2',
        question: 'אצל מי מוכנים לשבת ביום שישי בחצות ומקבלים שבת בנחת?',
        answers: [
          { answer: "המורה גרוסברגר", isCorrect: true },
          { answer: "משפחת פרל", isCorrect: false },
          { answer: "המורה צלניקר", isCorrect: false }
        ]
      },
      {
        questionId: 'question-3',
        question: 'הכיסאות סביב השולחנות העגולים... מתי הם בתפוסה מלאה?',
        answers: [
          { answer: "בתקופת המבחנים", isCorrect: true },
          { answer: "בהפסקה", isCorrect: false },
          { answer: "בתמריצים", isCorrect: false }
        ]
      },
      {
        questionId: 'question-4',
        question: 'באיזו כיתה מנוחת הצהריים היא תופעה רווחת',
        answers: [
          { answer: "יב", isCorrect: true },
          { answer: "ט", isCorrect: false },
          { answer: "יא", isCorrect: false }
        ]
      },
      {
        questionId: 'question-5',
        question: 'משימה: מוזמנות לבמה לבצע בנחת',
        answers: []
      },
      {
        questionId: 'question-6',
        question: 'הפתעה, מה הכנו לכן?',
        answers: [
          { answer: "קרטיבים", isCorrect: true },
          { answer: "שלוקים", isCorrect: false },
          { answer: "איגלו", isCorrect: false }
        ]
      },
    ]
  },
  {
    id: 2,
    questions: [
      {
        questionId: 'question-7',
        question: 'מתי הבנות מחוץ לעיר רגילות לקום בבוקר?',
        answers: [
          { answer: "06:30", isCorrect: true },
          { answer: "07:05", isCorrect: false },
          { answer: "עם עלות השחר", isCorrect: false }
        ]
      },
      {
        questionId: 'question-8',
        question: 'מתי כיתה י"ב רגילה לעשות שיעורי בית באנגלית [הקבצה א\'2]?',
        answers: [
          { answer: "בהפסקה", isCorrect: true },
          { answer: "בבית", isCorrect: false },
          { answer: "מיד בשיעור", isCorrect: false }
        ]
      },
      {
        questionId: 'question-9',
        question: 'מי רגילה לברך רק מתוך הכתוב?',
        answers: [
          { answer: "המורה זומר", isCorrect: true },
          { answer: "לא ידוע", isCorrect: false },
          { answer: "כולן", isCorrect: false }
        ]
      },
      {
        questionId: 'question-10',
        question: "'הרגל נעשה טבע'- מי אומרת הרבה את המשפט?",
        answers: [
          { answer: "המנהלת", isCorrect: true },
          { answer: "הסגנית", isCorrect: false },
          { answer: "המזכירה", isCorrect: false }
        ]
      },
      {
        questionId: 'question-11',
        question: 'משימה: עליכן להעביר חוט ביניכן בלי לקום מהכיסא.',
        answers: []
      },
      {
        questionId: 'question-12',
        question: 'הפתעה, מה הכנו לכן?',
        answers: [
          { answer: "משהו שרגילים לאכול", isCorrect: true },
          { answer: "ממתק חדש ", isCorrect: false },
          { answer: "קרמבו", isCorrect: false }
        ]
      },
    ]
  },
  {
    id: 3,
    questions: [
      {
        questionId: 13,
        question: "כמה זמן לוקח למורה דויטש 'לקפוץ' לחתונה של תלמידה בבני ברק?",
        answers: [
          { answer: "שעה", isCorrect: true },
          { answer: "שעתיים", isCorrect: false },
          { answer: "30 דקות", isCorrect: false }
        ]
      },
      {
        questionId: 14,
        question: "אם קופצים גבוה מידי נופלים' באיזו תוכנית הוזכר?",
        answers: [
          { answer: 'תעמולה של כיתה י"ב', isCorrect: true },
          { answer: "תוכנית פתיחה למחנה", isCorrect: false },
          { answer: "בשבת עיון", isCorrect: false }
        ]
      },
      {
        questionId: 15,
        question: "באיזה המנון מוזכרת המילה 'קפיצה'?",
        answers: [
          { answer: "כלי למעלות", isCorrect: true },
          { answer: "אויף שמחעס", isCorrect: false },
          { answer: "מדרגות", isCorrect: false }
        ]
      },
      {
        questionId: 16,
        question: "בתוכנית צילום- מי הצליחה לעשות תמונה הכי טובה של הקפיצה?",
        answers: [
          { answer: "רבקי שמואל", isCorrect: true },
          { answer: "חוה אלחדד", isCorrect: false },
          { answer: "רייזי אורלנציק", isCorrect: false }
        ]
      },
      {
        questionId: 17,
        question: "משימה: העברנה ביניכן את הכדור 10 פעמים בלי שיפול על הרצפה",
        answers: [
        ]
      },
      {
        questionId: 18,
        question: "הפתעה, מה הכנו לכן?",
        answers: [
          { answer: "טופי בעיגול", isCorrect: true },
          { answer: "כדור", isCorrect: false },
          { answer: "סוכריה על מקל", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 4,
    questions: [
      {
        questionId: 19,
        question: "על מי בתמריצים אמרה המורפולוגית שהיא זריזה?",
        answers: [
          { answer: "פייגא ציפורה ליכטנשטיין", isCorrect: true },
          { answer: "לייקי ליכטנשטיין", isCorrect: false },
          { answer: "שורי טייטלבוים", isCorrect: false }
        ]
      },
      {
        questionId: 21,
        question: "איזו הרצאה דיברה במיוחד על 'במהרה בימינו?",
        answers: [
          { answer: "הגב ברוריה גרין", isCorrect: true },
          { answer: "הרב גליצקי", isCorrect: false },
          { answer: "המורה בוקצ'ין", isCorrect: false }
        ]
      },
      {
        questionId: 22,
        question: "כמה בנות ממהרות כל יום לסמינר בשעה 8:17?",
        answers: [
          { answer: "פחות מ-10", isCorrect: true },
          { answer: "אף אחת", isCorrect: false },
          { answer: "30% מהתלמידות", isCorrect: false }
        ]
      },
      {
        questionId: 23,
        question: "אין מזרזין אלא למזורזין- מה המקור?",
        answers: [
          { answer: "במקורות", isCorrect: true },
          { answer: "פתגם", isCorrect: false },
          { answer: "לא ידוע", isCorrect: false }
        ]
      },
      {
        questionId: 24,
        question: "משימה: מוזמנות לבמה על הבימבה לסיבוב מהיר וחזרה פנימה",
        answers: [
        ]
      },
      {
        questionId: 20,
        question: "הפתעה: מה הכנו לכן?",
        answers: [
          { answer: "שעון", isCorrect: true },
          { answer: "סוכריות", isCorrect: false },
          { answer: "חטיף", isCorrect: false }
        ]
      },
    ]
  },
  {
    id: 5,
    questions: [
      {
        questionId: 25,
        question: "על מי מסופר שעבד ברצינות על אמיצות הלב",
        answers: [
          { answer: "ר' יענקלה גלינסקי", isCorrect: true },
          { answer: "הסבא מסלבודקא", isCorrect: false },
          { answer: "החפץ חיים", isCorrect: false }
        ]
      },
      {
        questionId: 26,
        question: "כל כמה זמן עושים סדר יסודי במגירות המשרד?",
        answers: [
          { answer: "אין סדר קבוע", isCorrect: true },
          { answer: "פעם בשבוע", isCorrect: false },
          { answer: "פעמיים בשנה", isCorrect: false }
        ]
      },
      {
        questionId: 27,
        question: "מתי המשרד נפתח בבוקר?",
        answers: [
          { answer: "08:00", isCorrect: true },
          { answer: "07:50", isCorrect: false },
          { answer: "08:15", isCorrect: false }
        ]
      },
      {
        questionId: 28,
        question: "איזה מורה קוראת שמות ברצינות יתירה?",
        answers: [
          { answer: "המורה צלניקר", isCorrect: true },
          { answer: "המורה גרוסברגר", isCorrect: false },
          { answer: "המורה שפיץ", isCorrect: false }
        ]
      },
      {
        questionId: 29,
        question: "משימה: עליכן לפנק את צוות המשרד בצורה מעניינת",
        answers: [
        ]
      },
      {
        questionId: 30,
        question: "הפתעה: מה הכנו לכן?",
        answers: [
          { answer: "צרור מפתחות למשרד...", isCorrect: true },
          { answer: "דפי ממו", isCorrect: false },
          { answer: "עטים", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 6,
    questions: [
      {
        questionId: 31,
        question: "כמה בנות בכיתה י' הולכות בשבת עם נעליים לא נוחות [נעלי עקב?]",
        answers: [
          { answer: "לא ידוע", isCorrect: true },
          { answer: "8", isCorrect: false },
          { answer: "יותר מחצי...", isCorrect: false }
        ]
      },
      {
        questionId: 32,
        question: "על אילו שורשים נשען הסמינר שלנו?",
        answers: [
          { answer: "שתי התשובות נכונות", isCorrect: true },
          { answer: "החסידות", isCorrect: false },
          { answer: "האידישקייט", isCorrect: false }
        ]
      },
      {
        questionId: 33,
        question: "מה הכי לא נוח לסגנית לעשות בסמינר?",
        answers: [
          { answer: "לאכזב את התלמידות", isCorrect: true },
          { answer: "לנעול את השער בבוקר", isCorrect: false },
          { answer: "לדאוג לסדר ונקיון", isCorrect: false }
        ]
      },
      {
        questionId: 34,
        question: "באיזו תוכנית ישבו ללא משענת?",
        answers: [
          { answer: "בקרוב", isCorrect: true },
          { answer: "אף פעם", isCorrect: false },
          { answer: "בשנה שעברה", isCorrect: false }
        ]
      },
      {
        questionId: 35,
        question: "משימה: מוזמנות לבמה...",
        answers: [
        ]
      },
      {
        questionId: 36,
        question: "הפתעה, מה הכנו לכן?",
        answers: [
          { answer: "משהו נוחות", isCorrect: true },
          { answer: "מקל סבא להשענות", isCorrect: false },
          // { answer: "סוריה", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 7,
    questions: [
      {
        questionId: 37,
        question: "לכמה בנות בסמינר יש אמא גננת?",
        answers: [
          { answer: "7", isCorrect: true },
          { answer: "9", isCorrect: false },
          { answer: "15", isCorrect: false }
        ]
      },
      {
        questionId: 38,
        question: "מי המוז'ינקלה בסמינר?",
        answers: [
          { answer: "פייגא רחל ליכטנשטיין", isCorrect: true },
          { answer: "פייגא ציפורה ליכטנשטיין", isCorrect: false },
          { answer: "פייגא מלכה ליכטנשטיין", isCorrect: false }
        ]
      },
      {
        questionId: 40,
        question: "לפעמים כיף לי לעשות דברים עם הילד הקטן שבי...",
        answers: [
          { answer: "נכון", isCorrect: true },
          { answer: "לא נכון", isCorrect: false },
          { answer: "תמיד", isCorrect: false }
        ]
      },
      {
        questionId: 39,
        question: "כמה שנים קיים 'גן מסיה'?",
        answers: [
          { answer: "מאז שאני זוכרת את עצמי...", isCorrect: true },
          { answer: "10", isCorrect: false },
          { answer: "4", isCorrect: false }
        ]
      },
      {
        questionId: 41,
        question: "משימה: נחזור רגע לכישורים הנדרשים בגן...",
        answers: [
        ]
      },
      {
        questionId: 42,
        question: "הפתעה: מה קנינו לכן?",
        answers: [
          { answer: "לורדים", isCorrect: true },
          { answer: "מדבקות", isCorrect: false },
          { answer: "יצירה", isCorrect: false }
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
              <div class="question-answer">${question.answers.find(a => a.isCorrect)?.answer || ''}</div>
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
