const level14Mul = [
    {
      "question": "14 x 1 = ?",
      "options": ["17", "13", "12", "14"],
      "answer": "14"
    },
    {
      "question": "14 x 2 = ?",
      "options": ["31", "38", "28", "32"],
      "answer": "28"
    },
    {
      "question": "14 x 3 = ?",
      "options": ["42", "35", "50", "49"],
      "answer": "42"
    },
    {
      "question": "14 x 4 = ?",
      "options": ["50", "59", "56", "46"],
      "answer": "56"
    },
    {
      "question": "14 x 5 = ?",
      "options": ["63", "79", "70", "65"],
      "answer": "70"
    },
    {
      "question": "14 x 6 = ?",
      "options": ["84", "91", "80", "74"],
      "answer": "84"
    },
    {
      "question": "14 x 7 = ?",
      "options": ["88", "98", "97", "99"],
      "answer": "98"
    },
    {
      "question": "14 x 8 = ?",
      "options": ["112", "107", "118", "109"],
      "answer": "112"
    },
    {
      "question": "14 x 9 = ?",
      "options": ["122", "121", "126", "133"],
      "answer": "126"
    },
    {
      "question": "14 x 10 = ?",
      "options": ["140", "148", "131", "139"],
      "answer": "140"
    },
    {
      "question": "14 x 11 = ?",
      "options": ["147", "160", "154", "150"],
      "answer": "154"
    },
    {
      "question": "14 x 12 = ?",
      "options": ["171", "163", "168", "169"],
      "answer": "168"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level14Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });
    export default level14Mul;