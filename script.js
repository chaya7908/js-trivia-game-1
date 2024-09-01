const TIME_TO_DISPLAY_Q_BEFORE_A = 6000;
const TIME_TO_WAIT_BEFORE_CHECK_ANSWER = 6000;
const TIME_TO_WAIT_BEFORE_CLOSE_CORRECT_ANSWER = 4000;
const TIME_TO_WAIT_BEFORE_CLOSE_WRONG_ANSWER = 2000;
const TIMEOUT_FOR_SINGLE_QUESTION = 10000;
const questions = [
  {
    questionId: 'question-1',
    question: 'מה השם שלך?',
    answers: [
      { answer: "המרכזת", isCorrect: true },
      { answer: "המורה תעיזי", isCorrect: false },
      { answer: "המורה עסיס", isCorrect: false }
    ]
  },
  {
    questionId: 'question-2',
    question: 'באיזה שנה נוסדה המדינה?',
    answers: [
      { answer: "1948", isCorrect: true },
      { answer: "1967", isCorrect: false },
      { answer: "1956", isCorrect: false }
    ]
  },
  {
    questionId: 'question-3',
    question: 'מה עיר הבירה של ישראל?',
    answers: [
      { answer: "ירושלים", isCorrect: true },
      { answer: "תל אביב", isCorrect: false },
      { answer: "חיפה", isCorrect: false }
    ]
  },
  {
    questionId: 'question-4',
    question: 'מה שמה של הים שמקיף את ישראל?',
    answers: [
      { answer: "הים התיכון", isCorrect: true },
      { answer: "הים האדום", isCorrect: false },
      { answer: "הים השחור", isCorrect: false }
    ]
  },
  {
    questionId: 'question-5',
    question: 'כמה שפות רשמיות יש בישראל?',
    answers: [
      { answer: "שתיים", isCorrect: true },
      { answer: "אחת", isCorrect: false },
      { answer: "שלוש", isCorrect: false }
    ]
  },
  {
    questionId: 'question-6',
    question: 'איזו חיה נמצאת על הסמל של ירושלים?',
    answers: [
      { answer: "אריה", isCorrect: true },
      { answer: "נשר", isCorrect: false },
      { answer: "שועל", isCorrect: false }
    ]
  },
  {
    questionId: 'question-7',
    question: 'מי היה ראש הממשלה הראשון של ישראל?',
    answers: [
      { answer: "דוד בן-גוריון", isCorrect: true },
      { answer: "גולדה מאיר", isCorrect: false },
      { answer: "יצחק רבין", isCorrect: false }
    ]
  },
  {
    questionId: 'question-8',
    question: 'מהו הנהר הארוך ביותר בישראל?',
    answers: [
      { answer: "הירדן", isCorrect: true },
      { answer: "הירקון", isCorrect: false },
      { answer: "נחל אלכסנדר", isCorrect: false }
    ]
  },
  {
    questionId: 'question-9',
    question: 'מהי העיר הגדולה ביותר בישראל?',
    answers: [
      { answer: "ירושלים", isCorrect: true },
      { answer: "תל אביב", isCorrect: false },
      { answer: "חיפה", isCorrect: false }
    ]
  },
  {
    questionId: 'question-10',
    question: 'איזה מאכל מסורתי אוכלים בפסח?',
    answers: [
      { answer: "מצה", isCorrect: true },
      { answer: "חלה", isCorrect: false },
      { answer: "בורקס", isCorrect: false }
    ]
  },
  {
    questionId: 'question-11',
    question: 'כמה ימים יש בחודש פברואר בשנה רגילה?',
    answers: [
      { answer: "28", isCorrect: true },
      { answer: "30", isCorrect: false },
      { answer: "29", isCorrect: false }
    ]
  },
  {
    questionId: 'question-12',
    question: 'מהו המטבע הרשמי של ישראל?',
    answers: [
      { answer: "שקל", isCorrect: true },
      { answer: "לירה", isCorrect: false },
      { answer: "דולר", isCorrect: false }
    ]
  },
  {
    questionId: 'question-13',
    question: 'איזו עיר מכונה "העיר ללא הפסקה"?',
    answers: [
      { answer: "תל אביב", isCorrect: true },
      { answer: "ירושלים", isCorrect: false },
      { answer: "חיפה", isCorrect: false }
    ]
  },
  {
    questionId: 'question-14',
    question: 'מהו המקום הנמוך ביותר בעולם?',
    answers: [
      { answer: "ים המלח", isCorrect: true },
      { answer: "הר אוורסט", isCorrect: false },
      { answer: "הגרנד קניון", isCorrect: false }
    ]
  },
  {
    questionId: 'question-15',
    question: 'מי כתב את ההמנון הלאומי של ישראל?',
    answers: [
      { answer: "נפתלי הרץ אימבר", isCorrect: true },
      { answer: "חיים נחמן ביאליק", isCorrect: false },
      { answer: "שאול טשרניחובסקי", isCorrect: false }
    ]
  },
  {
    questionId: 'question-16',
    question: 'איזו חיה לא נכללת בחיות הכשרות?',
    answers: [
      { answer: "חזיר", isCorrect: true },
      { answer: "פרה", isCorrect: false },
      { answer: "כבשה", isCorrect: false }
    ]
  },
  {
    questionId: 'question-17',
    question: 'איזה כינוי יש ליצחק שמיר?',
    answers: [
      { answer: "לשועל", isCorrect: true },
      { answer: "לנשר", isCorrect: false },
      { answer: "לאריה", isCorrect: false }
    ]
  },
  {
    questionId: 'question-18',
    question: 'איזה פרי מסמל את ראש השנה?',
    answers: [
      { answer: "רימון", isCorrect: true },
      { answer: "תפוז", isCorrect: false },
      { answer: "תפוח", isCorrect: false }
    ]
  },
  {
    questionId: 'question-19',
    question: 'איזה חג מציין את הניצחון על היוונים?',
    answers: [
      { answer: "חנוכה", isCorrect: true },
      { answer: "פסח", isCorrect: false },
      { answer: "פורים", isCorrect: false }
    ]
  },
  {
    questionId: 'question-20',
    question: 'מהו שם הספר הראשון של התנ"ך?',
    answers: [
      { answer: "בראשית", isCorrect: true },
      { answer: "שמות", isCorrect: false },
      { answer: "ויקרא", isCorrect: false }
    ]
  },
  {
    questionId: 'question-21',
    question: 'איזה ים נמצא בצפון ישראל?',
    answers: [
      { answer: "ים כנרת", isCorrect: true },
      { answer: "ים תיכון", isCorrect: false },
      { answer: "ים סוף", isCorrect: false }
    ]
  },
  {
    questionId: 'question-22',
    question: 'מהו השם הרשמי של יום העצמאות?',
    answers: [
      { answer: "יום הקמת המדינה", isCorrect: true },
      { answer: "יום המדינה", isCorrect: false },
      { answer: "יום האומה", isCorrect: false }
    ]
  },
  {
    questionId: 'question-23',
    question: 'איזה חג יהודי נמשך שמונה ימים?',
    answers: [
      { answer: "חנוכה", isCorrect: true },
      { answer: "פסח", isCorrect: false },
      { answer: "שבועות", isCorrect: false }
    ]
  },
  {
    questionId: 'question-24',
    question: 'איזה מאכל מסורתי אוכלים בראש השנה?',
    answers: [
      { answer: "תפוח בדבש", isCorrect: true },
      { answer: "חלה", isCorrect: false },
      { answer: "בורקס", isCorrect: false }
    ]
  },
  {
    questionId: 'question-25',
    question: 'באיזו שנה החליט האו"ם להקים את מדינת ישראל?',
    answers: [
      { answer: "1947", isCorrect: true },
      { answer: "1948", isCorrect: false },
      { answer: "1945", isCorrect: false }
    ]
  },
  {
    questionId: 'question-26',
    question: 'מהו המישור הגדול ביותר בישראל?',
    answers: [
      { answer: "מישור החוף", isCorrect: true },
      { answer: "מישור הגולן", isCorrect: false },
      { answer: "מישור רמון", isCorrect: false }
    ]
  },
  {
    questionId: 'question-27',
    question: 'מי היה ראש הממשלה הראשון שנרצח?',
    answers: [
      { answer: "יצחק רבין", isCorrect: true },
      { answer: "מנחם בגין", isCorrect: false },
      { answer: "אריאל שרון", isCorrect: false }
    ]
  },
  {
    questionId: 'question-28',
    question: 'איזה נהר נמצא במרכז ישראל?',
    answers: [
      { answer: "הירקון", isCorrect: true },
      { answer: "הירדן", isCorrect: false },
      { answer: "נחל אלכסנדר", isCorrect: false }
    ]
  },
  {
    questionId: 'question-29',
    question: 'באיזו שנה החליט האו"ם להקים את מדינת ישראל?',
    answers: [
      { answer: "1947", isCorrect: true },
      { answer: "1948", isCorrect: false },
      { answer: "1945", isCorrect: false }
    ]
  },
  {
    questionId: 'question-30',
    question: 'איזה עיר בישראל מכונה "בירת הנגב"?',
    answers: [
      { answer: "באר שבע", isCorrect: true },
      { answer: "אילת", isCorrect: false },
      { answer: "דימונה", isCorrect: false }
    ]
  },
  {
    questionId: 'question-31',
    question: 'מהי הציפור הלאומית של ישראל?',
    answers: [
      { answer: "דוכיפת", isCorrect: true },
      { answer: "חסידה", isCorrect: false },
      { answer: "עורב", isCorrect: false }
    ]
  },
  {
    questionId: 'question-32',
    question: 'איזה צמח מסמל את חג הפסח?',
    answers: [
      { answer: "מצה", isCorrect: true },
      { answer: "מרור", isCorrect: false },
      { answer: "חרוסת", isCorrect: false }
    ]
  },
  {
    questionId: 'question-33',
    question: 'מהו שם השדה תעופה המרכזי בישראל?',
    answers: [
      { answer: "נתב'ג", isCorrect: true },
      { answer: "שדה דב", isCorrect: false },
      { answer: "רמון", isCorrect: false }
    ]
  },
  {
    questionId: 'question-34',
    question: 'מהו המאכל הלאומי של ישראל?',
    answers: [
      { answer: "חומוס", isCorrect: true },
      { answer: "שקשוקה", isCorrect: false },
      { answer: "פלאפל", isCorrect: false }
    ]
  },
  {
    questionId: 'question-35',
    question: 'מהו שמו של יום הזיכרון לשואה?',
    answers: [
      { answer: "יום השואה", isCorrect: true },
      { answer: "יום הזיכרון", isCorrect: false },
      { answer: "יום העצמאות", isCorrect: false }
    ]
  },
  {
    questionId: 'question-36',
    question: 'מהי שפת הדיבור הרשמית בישראל?',
    answers: [
      { answer: "עברית", isCorrect: true },
      { answer: "אנגלית", isCorrect: false },
      { answer: "ערבית", isCorrect: false }
    ]
  },
  {
    questionId: 'question-37',
    question: 'באיזה שנה התרחש רצח רבין?',
    answers: [
      { answer: "1995", isCorrect: true },
      { answer: "1994", isCorrect: false },
      { answer: "1996", isCorrect: false }
    ]
  },
  {
    questionId: 'question-38',
    question: 'מהי הרכבת החשמלית הראשונה בישראל?',
    answers: [
      { answer: "רכבת קלה", isCorrect: true },
      { answer: "רכבת ישראל", isCorrect: false },
      { answer: "מטרונית", isCorrect: false }
    ]
  },
  {
    questionId: 'question-39',
    question: 'מהי עיר הקודש לשלוש הדתות?',
    answers: [
      { answer: "ירושלים", isCorrect: true },
      { answer: "תל אביב", isCorrect: false },
      { answer: "חיפה", isCorrect: false }
    ]
  },
  {
    questionId: 'question-40',
    question: 'מהו הכינוי של תל אביב?',
    answers: [
      { answer: "העיר הלבנה", isCorrect: true },
      { answer: "העיר השחורה", isCorrect: false },
      { answer: "העיר הירוקה", isCorrect: false }
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
