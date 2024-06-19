const level12Mul = [
    {
      "question": "12 x 1 = ?",
      "options": ["13", "19", "16", "12"],
      "answer": "12"
    },
    {
      "question": "12 x 2 = ?",
      "options": ["30", "26", "32", "24"],
      "answer": "24"
    },
    {
      "question": "12 x 3 = ?",
      "options": ["37", "38", "33", "36"],
      "answer": "36"
    },
    {
      "question": "12 x 4 = ?",
      "options": ["55", "58", "40", "48"],
      "answer": "48"
    },
    {
      "question": "12 x 5 = ?",
      "options": ["55", "54", "60", "61"],
      "answer": "60"
    },
    {
      "question": "12 x 6 = ?",
      "options": ["62", "63", "76", "72"],
      "answer": "72"
    },
    {
      "question": "12 x 7 = ?",
      "options": ["79", "84", "88", "78"],
      "answer": "84"
    },
    {
      "question": "12 x 8 = ?",
      "options": ["106", "96", "97", "94"],
      "answer": "96"
    },
    {
      "question": "12 x 9 = ?",
      "options": ["110", "114", "108", "104"],
      "answer": "108"
    },
    {
      "question": "12 x 10 = ?",
      "options": ["120", "118", "124", "113"],
      "answer": "120"
    },
    {
      "question": "12 x 11 = ?",
      "options": ["134", "127", "132", "136"],
      "answer": "132"
    },
    {
      "question": "12 x 12 = ?",
      "options": ["138", "145", "144", "137"],
      "answer": "144"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level12Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });
    export default level12Mul;