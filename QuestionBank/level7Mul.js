const level7Mul = [
    {
      "question": "7 x 1 = ?",
      "options": ["3", "5", "1", "7"],
      "answer": "7"
    },
    {
      "question": "7 x 2 = ?",
      "options": ["23", "13", "12", "14"],
      "answer": "14"
    },
    {
      "question": "7 x 3 = ?",
      "options": ["28", "21", "22", "20"],
      "answer": "21"
    },
    {
      "question": "7 x 4 = ?",
      "options": ["32", "36", "20", "28"],
      "answer": "28"
    },
    {
      "question": "7 x 5 = ?",
      "options": ["37", "36", "35", "31"],
      "answer": "35"
    },
    {
      "question": "7 x 6 = ?",
      "options": ["42", "43", "33", "36"],
      "answer": "42"
    },
    {
      "question": "7 x 7 = ?",
      "options": ["39", "43", "53", "49"],
      "answer": "49"
    },
    {
      "question": "7 x 8 = ?",
      "options": ["56", "58", "51", "55"],
      "answer": "56"
    },
    {
      "question": "7 x 9 = ?",
      "options": ["66", "56", "63", "71"],
      "answer": "63"
    },
    {
      "question": "7 x 10 = ?",
      "options": ["71", "80", "62", "70"],
      "answer": "70"
    },
    {
      "question": "7 x 11 = ?",
      "options": ["83", "81", "77", "80"],
      "answer": "77"
    },
    {
      "question": "7 x 12 = ?",
      "options": ["84", "93", "82", "76"],
      "answer": "84"
    }
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level7Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });

    export default level7Mul;