export const data = {
  questions: [
    {
      q: 'What is 2 + 2?',
      answers: [
        {
          text: '4',
          is_correct: true,
        },
        {
          text: '3',
          is_correct: false,
        },
        {
          text: 'Fish',
          is_correct: false,
        },
        {
          text: '5',
          is_correct: false,
        },
      ],
    },
    {
      q: 'How many letters are in the word "Banana"?',
      answers: [
        {
          text: '5',
          is_correct: false,
        },
        {
          text: '7',
          is_correct: false,
        },
        {
          text: '6',
          is_correct: true,
        },
        {
          text: '12',
          is_correct: false,
        },
      ],
    },

    {
      q: 'Find the missing letter: C_ke',
      answers: [
        {
          text: 'e',
          is_correct: false,
        },
        {
          text: 'a',
          is_correct: true,
        },
        {
          text: 'i',
          is_correct: false,
        },
      ],
    },
    {
      q: 'Как зовут  "Эдика"?',
      answers: [
        {
          text: 'Ra1n-xD',
          is_correct: false,
        },
        {
          text: 'Дощъ',
          is_correct: false,
        },
        {
          text: 'пЭдуард',
          is_correct: true,
        },
        {
          text: 'Дощь (пЭдик)',
          is_correct: false,
        },
      ],
    },
  ],
  results: [
    {
      min: 0,
      max: 2,
      title: 'Try again!',
      desc: 'Do a little more studying and you may succeed!',
    },
    {
      min: 3,
      max: 3,
      title: "Wow, you're a genius!",
      desc: 'Studying has definitely paid off for you!',
    },
    {
      min: 4,
      max: 4,
      title: 'ВАУ ДА ТЫ ЁБ@НЫЙ Волшебник!',
      desc: 'Братан, хорош, давай, давай, вперёд! Контент в кайф, можно ещё? Вообще красавчик! Можно вот этого вот почаще?!',
    },
  ],
};
