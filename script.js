const TIME_TO_DISPLAY_Q_BEFORE_A = 6000;
const TIME_TO_WAIT_BEFORE_CHECK_ANSWER = 6000;
const TIME_TO_WAIT_BEFORE_CLOSE_CORRECT_ANSWER = 4000;
const TIME_TO_WAIT_BEFORE_CLOSE_WRONG_ANSWER = 2000;
const TIMEOUT_FOR_SINGLE_QUESTION = 10000;


const questions = [
  {
    questionId: 1,
    question: "מי המורה שבתמונה להשיג תמונה",
    answers: [
      { answer: "המנהלת", isCorrect: true },
      { answer: "המורה חני יאקאב", isCorrect: false },
      { answer: "המורה חוי שפירא", isCorrect: false }
    ]
  },
  {
    questionId: 2,
    question: "איזו מורה היתה כאן בשנה הראשונה",
    answers: [
      { answer: "המורה חני פלם", isCorrect: true },
      { answer: "המורה חני יאקאב", isCorrect: false },
      { answer: "המורה רחל היזרעאלי", isCorrect: false }
    ]
  },
  {
    questionId: 3,
    question: "מתי שונה הכינוי בלוגו מ'תיכון' ל'סמינר'",
    answers: [
      { answer: "בחודש טבת שנה שעברה", isCorrect: true },
      { answer: "בתחילת שנה שעברה", isCorrect: false },
      { answer: "בחופש האחרון", isCorrect: false }
    ]
  },
  {
    questionId: 4,
    question: "איזה חיידר סבא של המנהלת ניהל?",
    answers: [
      { answer: "תשב\"ר", isCorrect: true },
      { answer: "תורת אמת", isCorrect: false },
      { answer: "באר יהושוע", isCorrect: false }
    ]
  },
  {
    questionId: 5,
    question: "בכמה עבודות הסגנית עובדת?",
    answers: [
      { answer: 3, isCorrect: true },
      { answer: 2, isCorrect: false },
      { answer: 6, isCorrect: false }
    ]
  },
  {
    questionId: 6,
    question: "באיזו שעה המורה בת שבע גולדברג עולה לאוטובוס?",
    answers: [
      { answer: "07:27", isCorrect: true },
      { answer: "07:35", isCorrect: false },
      { answer: "07:22", isCorrect: false }
    ]
  },
  {
    questionId: 7,
    question: "איזו מורה מכינה סימנים למנהלת?",
    answers: [
      { answer: "המורה רחל היזראעלי", isCorrect: true },
      { answer: "הסגנית", isCorrect: false },
      { answer: "המנהלת מכינה לבד", isCorrect: false }
    ]
  },
  {
    questionId: 8,
    question: "​כמה מורות עובדות השנה בסמינר?",
    answers: [
      { answer: 24, isCorrect: true },
      { answer: 20, isCorrect: false },
      { answer: 28, isCorrect: false }
    ]
  },
  {
    questionId: 9,
    question: "איזו תופעה השתפרה תוך זמן קצר בזכות המנהלת?",
    answers: [
      { answer: "שרשרת צוואר", isCorrect: true },
      { answer: "איחורים", isCorrect: false },
      { answer: "חולצה בחוץ", isCorrect: false }
    ]
  },
  {
    questionId: 10,
    question: "כמה מערכות השתנו שנה שעברה?",
    answers: [
      { answer: 4, isCorrect: true },
      { answer: 3, isCorrect: false },
      { answer: 1, isCorrect: false }
    ]
  },
  {
    questionId: 11,
    question: "מה התחביב של המורה חני פלם?",
    answers: [
      { answer: "לצאת לטיולים", isCorrect: true },
      { answer: "לקרוא", isCorrect: false },
      { answer: "לפצח חידות מתמטיות", isCorrect: false }
    ]
  },
  {
    questionId: 12,
    question: "כמה שיחות נכנסות בממוצע בשבוע לטלפון האישי של המנהלת בענייני הסמינר?",
    answers: [
      { answer: "כ- 140", isCorrect: true },
      { answer: "כ- 100", isCorrect: false },
      { answer: "כ- 120", isCorrect: false }
    ]
  },
  {
    questionId: 13,
    question: `
    <img src='./question-images/question-14.JPG' />
    `,
    answers: [
      { answer: "המורה חני גרוסמן", isCorrect: true },
      { answer: "המורה חני פלם", isCorrect: false },
      { answer: "המורה חני לנדא", isCorrect: false }
    ]
  },
  {
    questionId: 14,
    question: "מי הבנות שהיו שותפות בצביעת הנדנדה הוורודה?",
    answers: [
      { answer: "6-8", isCorrect: true },
      { answer: "10-12", isCorrect: false },
      { answer: "2-3", isCorrect: false }
    ]
  },
  {
    questionId: 15,
    question: "מי הבנות שמגיעות בד\"כ ראשונות לסמינר?",
    answers: [
      { answer: "הגנת\"קיות", isCorrect: true },
      { answer: "תמר לבקובסקי", isCorrect: false },
      { answer: "הדר מנור", isCorrect: false }
    ]
  },
  {
    questionId: 16,
    question: "לאיזו מורה הכינה רותי וועקנין מחזיק מפתחות?",
    answers: [
      { answer: "המורה חני יאקאב", isCorrect: true },
      { answer: "המורה בת שבע גולדברג", isCorrect: false },
      { answer: "המורה חני גרוסמן", isCorrect: false }
    ]
  },
  {
    questionId: 17,
    question: "מי זכתה במכירה הסינית בשיעור פרטי מהמורה חני פלם?",
    answers: [
      { answer: "אורית נמני", isCorrect: true },
      { answer: "נועה ניסנוב", isCorrect: false },
      { answer: "יעל מילשטיין", isCorrect: false }
    ]
  },
  {
    questionId: 18,
    question: "כמה זמן הגנים היו בסמינר שנה שעברה?",
    answers: [
      { answer: "חודשיים", isCorrect: true },
      { answer: "חצי שנה", isCorrect: false },
      { answer: "חמישה שבועות", isCorrect: false }
    ]
  },
  {
    questionId: 19,
    question: "כמה בנות מהסמינר התנדבו שנה שעברה ב\"נותנים כוח\"?",
    answers: [
      { answer: "כ-14", isCorrect: true },
      { answer: "כ- 17", isCorrect: false },
      { answer: "כ- 6", isCorrect: false }
    ]
  },
  {
    questionId: 20,
    question: "כמה אלעדיות יש לנו?",
    answers: [
      { answer: 12, isCorrect: true },
      { answer: 10, isCorrect: false },
      { answer: 15, isCorrect: false }
    ]
  },
  {
    questionId: 21,
    question: "של איזה שיר היתה המנגינה של הקולולם במוצ\"ש במחנה?",
    answers: [
      { answer: "אהבת תורה", isCorrect: true },
      { answer: "עברתי בחושך", isCorrect: false },
      { answer: "בר יוחאי", isCorrect: false }
    ]
  },
  {
    questionId: 22,
    question: "כמה חדרים לתלמידות היו במחנה קיץ?",
    answers: [
      { answer: 10, isCorrect: true },
      { answer: 20, isCorrect: false },
      { answer: 12, isCorrect: false }
    ]
  },
  {
    questionId: 23,
    question: "מה השם השני של הסגנית?",
    answers: [
      { answer: "אין לה שם שני", isCorrect: true },
      { answer: "יפה", isCorrect: false },
      { answer: "רבקה", isCorrect: false }
    ]
  },
  {
    questionId: 24,
    question: "לאיזו מורה יש הכי הרבה נכדים?",
    answers: [
      { answer: "המורה שרי לוק", isCorrect: true },
      { answer: "היועצת", isCorrect: false },
      { answer: "המורה חוי שפירא", isCorrect: false }
    ]
  },
  {
    questionId: 25,
    question: "באיזה סמינר לומדת הבת של המורה אביגיל שאר ישוב?",
    answers: [
      { answer: "צוקר", isCorrect: true },
      { answer: "לדעת חכמה", isCorrect: false },
      { answer: "כהנא", isCorrect: false }
    ]
  },
  {
    questionId: 26,
    question: "באיזה יום קבוע רמות תופסים את האולם?",
    answers: [
      { answer: "רביעי", isCorrect: true },
      { answer: "שלישי", isCorrect: false },
      { answer: "חמישי", isCorrect: false }
    ]
  },
  {
    questionId: 27,
    question: "באיזה בית ספר היועצת עובדת?",
    answers: [
      { answer: "בי\"ע ראשון לציון", isCorrect: true },
      { answer: "מסורת ישראל- קרית הרצוג", isCorrect: false },
      { answer: "בי\"ע רחובות", isCorrect: false }
    ]
  },
  {
    questionId: 28,
    question: "כמה שעות שבועיות מלמדת המורה חוי שפירא בסמינר?",
    answers: [
      { answer: 14, isCorrect: true },
      { answer: 12, isCorrect: false },
      { answer: 17, isCorrect: false }
    ]
  },
  {
    questionId: 29,
    question: "איזה פינוק חכה לתלמידות אחרי חופשת פסח שנה שעברה?",
    answers: [
      { answer: "קרטיבים", isCorrect: true },
      { answer: "טילונים", isCorrect: false },
      { answer: "מנה חמה", isCorrect: false }
    ]
  },
  {
    questionId: 30,
    question: "מאיזה חנות היתה הפיצה שהמנהלת הזמינה לבנות שהגיעו לעבוד במוצ\"ש ערב ההתמודדות?",
    answers: [
      { answer: "אנג'ל", isCorrect: true },
      { answer: "שמש", isCorrect: false },
      { answer: "גולדה", isCorrect: false }
    ]
  },
  {
    questionId: 31,
    question: "את מי רואים בקליפ של ההמנון שנה שעברה ראשונה?",
    answers: [
      { answer: "נחמה א. טובי ל. רחל מ. תמר ל. אביגיל ק.", isCorrect: true },
      { answer: "טליה ב. מימי פ. יעל ב. אביגיל ק.", isCorrect: false },
      { answer: "נועה ד. עדי ה. ויעל ש.", isCorrect: false }
    ]
  },
  {
    questionId: 32,
    question: "כמה בנות הכינו את הקצפת לעוגות חלאקה שנה שעברה?",
    answers: [
      { answer: 2, isCorrect: true },
      { answer: 3, isCorrect: false },
      { answer: 1, isCorrect: false }
    ]
  },
  {
    questionId: 33,
    question: "כמה בנות נרשמו השנה לסמינר?",
    answers: [
      { answer: "", isCorrect: true },
      { answer: "", isCorrect: false },
      { answer: "", isCorrect: false }
    ]
  },
  {
    questionId: 34,
    question: "כמה קווי אוטובוס עוברים בתחנה שצמודה לבית רבקה",
    answers: [
      { answer: 5, isCorrect: true },
      { answer: 7, isCorrect: false },
      { answer: 8, isCorrect: false }
    ]
  },
  {
    questionId: 35,
    question: "איזו מורה היתה במכירת החולצות בחופש",
    answers: [
      { answer: "המורה חני גרוסמן", isCorrect: true },
      { answer: "המורה שינדי רוזנפלד", isCorrect: false },
      { answer: "המורה בת שבע גולדברג", isCorrect: false }
    ]
  },
  {
    questionId: 36,
    question: "איזו מורה גרה בגני תקווה",
    answers: [
      { answer: "המורה רחל היזראעלי", isCorrect: true },
      { answer: "המורה נחמי גורדון", isCorrect: false },
      { answer: "היועצת", isCorrect: false }
    ]
  },
  {
    questionId: 37,
    question: "לאיזו מורה יש ידיים טובות?",
    answers: [
      { answer: "המורה יפי ברוקס", isCorrect: true },
      { answer: "הסגנית", isCorrect: false },
      { answer: "המורה שינדי רוזנפלד", isCorrect: false }
    ]
  },
  {
    questionId: 38,
    question: "באיזה שעה נגמר שיעור עשירי?",
    answers: [
      { answer: "16:50", isCorrect: true },
      { answer: "16:55", isCorrect: false },
      { answer: "16:45", isCorrect: false }
    ]
  },
  {
    questionId: 39,
    question: "על מה מדבר הסעיף הראשון בתקנון?",
    answers: [
      { answer: "נוכחות סדירה", isCorrect: true },
      { answer: "חולצה וחצאית תלבושת", isCorrect: false },
      { answer: "בילויים", isCorrect: false }
    ]
  }
];

const gameStartSound = new Audio('./sounds/start-game.mp3');
const gameBgSound = new Audio('./sounds/game.mp3');
gameBgSound.loop = true;

let answerTimeOut;

function handleCardClick(questionId) {
  const card = document.getElementById(questionId);
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
      }, TIME_TO_WAIT_BEFORE_CLOSE_CORRECT_ANSWER);
    } else {
      playGameSound('wrong');
      blink(element, 'red');
      setTimeout(() => {
        toggleAnswersPopup(false);
        card.classList.remove('active');
        toggleFlipCard(questionId, false);
      }, TIME_TO_WAIT_BEFORE_CLOSE_WRONG_ANSWER);
    }
  }, TIME_TO_WAIT_BEFORE_CHECK_ANSWER);
}

function showAnswersPopup(questionId) {
  toggleFreezScreen(false);
  toggleAnswersPopup(true);

  const answersList = document.querySelector('.answers-popup-content .answers-list');
  const currentQuestion = questions.find(q => q.questionId === questionId);

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


  shuffleArray(questions).forEach((question) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.id = question.questionId;
    card.innerHTML = `
        <div class="card-container" style="--random-delay: ${Math.random() * 4}s">
          <div class="card-background swing">
            <img class="main-image" src="./cup.png">
            <img class="text-image zoom-out" src="./life.png">
          </div>
          <div class="card-face">
            <div class="question-text">${question.question}</div>
            <div class="question-answer">${question.answers.find(a => a.isCorrect).answer}</div>
          </div>
        </div>
      `;
    card.addEventListener('click', () => handleCardClick(question.questionId));
    gridContainer.appendChild(card);
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
