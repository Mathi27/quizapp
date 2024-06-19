const level10Mul = [
    {
      "question": "10 x 1 = ?",
      "options": ["9", "10", "13", "4"],
      "answer": "10"
    },
    {
      "question": "10 x 2 = ?",
      "options": ["20", "15", "14", "13"],
      "answer": "20"
    },
    {
      "question": "10 x 3 = ?",
      "options": ["33", "29", "36", "30"],
      "answer": "30"
    },
    {
      "question": "10 x 4 = ?",
      "options": ["45", "40", "31", "49"],
      "answer": "40"
    },
    {
      "question": "10 x 5 = ?",
      "options": ["54", "50", "45", "56"],
      "answer": "50"
    },
    {
      "question": "10 x 6 = ?",
      "options": ["56", "54", "58", "60"],
      "answer": "60"
    },
    {
      "question": "10 x 7 = ?",
      "options": ["80", "70", "65", "73"],
      "answer": "70"
    },
    {
      "question": "10 x 8 = ?",
      "options": ["73", "80", "90", "79"],
      "answer": "80"
    },
    {
      "question": "10 x 9 = ?",
      "options": ["93", "90", "96", "85"],
      "answer": "90"
    },
    {
      "question": "10 x 10 = ?",
      "options": ["95", "101", "105", "100"],
      "answer": "100"
    },
    {
      "question": "10 x 11 = ?",
      "options": ["100", "106", "113", "110"],
      "answer": "110"
    },
    {
      "question": "10 x 12 = ?",
      "options": ["113", "114", "111", "120"],
      "answer": "120"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level10Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });
    export default level10Mul;