const level8Mul = [
    {
      "question": "8 x 1 = ?",
      "options": ["8", "17", "2", "11"],
      "answer": "8"
    },
    {
      "question": "8 x 2 = ?",
      "options": ["7", "8", "15", "16"],
      "answer": "16"
    },
    {
      "question": "8 x 3 = ?",
      "options": ["17", "27", "23", "24"],
      "answer": "24"
    },
    {
      "question": "8 x 4 = ?",
      "options": ["36", "39", "23", "32"],
      "answer": "32"
    },
    {
      "question": "8 x 5 = ?",
      "options": ["48", "40", "33", "39"],
      "answer": "40"
    },
    {
      "question": "8 x 6 = ?",
      "options": ["51", "53", "52", "48"],
      "answer": "48"
    },
    {
      "question": "8 x 7 = ?",
      "options": ["48", "60", "56", "53"],
      "answer": "56"
    },
    {
      "question": "8 x 8 = ?",
      "options": ["66", "55", "62", "64"],
      "answer": "64"
    },
    {
      "question": "8 x 9 = ?",
      "options": ["78", "81", "65", "72"],
      "answer": "72"
    },
    {
      "question": "8 x 10 = ?",
      "options": ["79", "90", "80", "72"],
      "answer": "80"
    },
    {
      "question": "8 x 11 = ?",
      "options": ["88", "96", "94", "92"],
      "answer": "88"
    },
    {
      "question": "8 x 12 = ?",
      "options": ["106", "105", "96", "95"],
      "answer": "96"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level8Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });
    export default level8Mul;