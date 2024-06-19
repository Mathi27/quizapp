const level13Mul = [
    {
      "question": "13 x 1 = ?",
      "options": ["13", "7", "16", "12"],
      "answer": "13"
    },
    {
      "question": "13 x 2 = ?",
      "options": ["26", "33", "17", "18"],
      "answer": "26"
    },
    {
      "question": "13 x 3 = ?",
      "options": ["31", "39", "32", "30"],
      "answer": "39"
    },
    {
      "question": "13 x 4 = ?",
      "options": ["61", "52", "46", "49"],
      "answer": "52"
    },
    {
      "question": "13 x 5 = ?",
      "options": ["65", "55", "70", "66"],
      "answer": "65"
    },
    {
      "question": "13 x 6 = ?",
      "options": ["78", "71", "85", "69"],
      "answer": "78"
    },
    {
      "question": "13 x 7 = ?",
      "options": ["93", "90", "85", "91"],
      "answer": "91"
    },
    {
      "question": "13 x 8 = ?",
      "options": ["94", "104", "107", "113"],
      "answer": "104"
    },
    {
      "question": "13 x 9 = ?",
      "options": ["110", "109", "125", "117"],
      "answer": "117"
    },
    {
      "question": "13 x 10 = ?",
      "options": ["121", "127", "130", "120"],
      "answer": "130"
    },
    {
      "question": "13 x 11 = ?",
      "options": ["149", "143", "136", "135"],
      "answer": "143"
    },
    {
      "question": "13 x 12 = ?",
      "options": ["156", "148", "151", "150"],
      "answer": "156"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level13Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });
    export default level13Mul;