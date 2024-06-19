const level9Div = [
    {
      "question": "63 ÷ 9 = ?",
      "options": ["11", "9", "7", "10"],
      "answer": "7"
    },
    {
      "question": "10 ÷ 9 = ?",
      "options": ["4", "3", "1", "2"],
      "answer": "1"
    },
    {
      "question": "90 ÷ 9 = ?",
      "options": ["10", "11", "12", "14"],
      "answer": "10"
    },
    {
      "question": "28 ÷ 9 = ?",
      "options": ["5", "4", "3", "7"],
      "answer": "3"
    },
    {
      "question": "65 ÷ 9 = ?",
      "options": ["9", "10", "12", "7"],
      "answer": "7"
    },
    {
      "question": "46 ÷ 9 = ?",
      "options": ["6", "8", "7", "5"],
      "answer": "5"
    },
    {
      "question": "28 ÷ 9 = ?",
      "options": ["5", "6", "8", "3"],
      "answer": "3"
    },
    {
      "question": "17 ÷ 9 = ?",
      "options": ["5", "6", "3", "1"],
      "answer": "1"
    },
    {
      "question": "90 ÷ 9 = ?",
      "options": ["10", "14", "12", "11"],
      "answer": "10"
    },
    {
      "question": "51 ÷ 9 = ?",
      "options": ["10", "8", "5", "6"],
      "answer": "5"
    },
    {
      "question": "31 ÷ 9 = ?",
      "options": ["7", "3", "8", "6"],
      "answer": "3"
    },
    {
      "question": "73 ÷ 9 = ?",
      "options": ["12", "9", "13", "8"],
      "answer": "8"
    },
    {
      "question": "62 ÷ 9 = ?",
      "options": ["6", "11", "8", "10"],
      "answer": "6"
    },
    {
      "question": "76 ÷ 9 = ?",
      "options": ["8", "13", "11", "10"],
      "answer": "8"
    },
    {
      "question": "74 ÷ 9 = ?",
      "options": ["11", "8", "9", "10"],
      "answer": "8"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level9Div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level9Div;