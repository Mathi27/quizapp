const level9Mul = [
    {
      "question": "9 x 1 = ?",
      "options": ["4", "15", "9", "6"],
      "answer": "9"
    },
    {
      "question": "9 x 2 = ?",
      "options": ["18", "22", "9", "21"],
      "answer": "18"
    },
    {
      "question": "9 x 3 = ?",
      "options": ["26", "35", "22", "27"],
      "answer": "27"
    },
    {
      "question": "9 x 4 = ?",
      "options": ["42", "30", "36", "44"],
      "answer": "36"
    },
    {
      "question": "9 x 5 = ?",
      "options": ["45", "53", "50", "49"],
      "answer": "45"
    },
    {
      "question": "9 x 6 = ?",
      "options": ["44", "54", "53", "64"],
      "answer": "54"
    },
    {
      "question": "9 x 7 = ?",
      "options": ["55", "58", "63", "64"],
      "answer": "63"
    },
    {
      "question": "9 x 8 = ?",
      "options": ["78", "72", "62", "64"],
      "answer": "72"
    },
    {
      "question": "9 x 9 = ?",
      "options": ["89", "72", "81", "71"],
      "answer": "81"
    },
    {
      "question": "9 x 10 = ?",
      "options": ["80", "86", "90", "82"],
      "answer": "90"
    },
    {
      "question": "9 x 11 = ?",
      "options": ["91", "99", "89", "97"],
      "answer": "99"
    },
    {
      "question": "9 x 12 = ?",
      "options": ["98", "108", "114", "101"],
      "answer": "108"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level9Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });
    export default level9Mul;