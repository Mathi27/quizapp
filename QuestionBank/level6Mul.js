const level6Mul = [
    {
      "question": "6 x 1 = ?",
      "options": ["16", "6", "2", "11"],
      "answer": "6"
    },
    {
      "question": "6 x 2 = ?",
      "options": ["14", "12", "2", "20"],
      "answer": "12"
    },
    {
      "question": "6 x 3 = ?",
      "options": ["18", "16", "13", "9"],
      "answer": "18"
    },
    {
      "question": "6 x 4 = ?",
      "options": ["20", "30", "24", "19"],
      "answer": "24"
    },
    {
      "question": "6 x 5 = ?",
      "options": ["30", "32", "40", "23"],
      "answer": "30"
    },
    {
      "question": "6 x 6 = ?",
      "options": ["35", "36", "43", "37"],
      "answer": "36"
    },
    {
      "question": "6 x 7 = ?",
      "options": ["33", "40", "43", "42"],
      "answer": "42"
    },
    {
      "question": "6 x 8 = ?",
      "options": ["55", "49", "42", "48"],
      "answer": "48"
    },
    {
      "question": "6 x 9 = ?",
      "options": ["63", "61", "53", "54"],
      "answer": "54"
    },
    {
      "question": "6 x 10 = ?",
      "options": ["56", "61", "65", "60"],
      "answer": "60"
    },
    {
      "question": "6 x 11 = ?",
      "options": ["70", "67", "59", "66"],
      "answer": "66"
    },
    {
      "question": "6 x 12 = ?",
      "options": ["81", "72", "68", "70"],
      "answer": "72"
    }
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level6Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });

      export default level6Mul;