const level2Div = [
    {
      "question": "7 ÷ 2 = ?",
      "options": ["8", "3", "6", "4"],
      "answer": "3"
    },
    {
      "question": "7 ÷ 2 = ?",
      "options": ["8", "3", "6", "5"],
      "answer": "3"
    },
    {
      "question": "13 ÷ 2 = ?",
      "options": ["10", "6", "9", "8"],
      "answer": "6"
    },
    {
      "question": "1 ÷ 2 = ?",
      "options": ["5", "0", "2", "1"],
      "answer": "0"
    },
    {
      "question": "8 ÷ 2 = ?",
      "options": ["4", "6", "9", "7"],
      "answer": "4"
    },
    {
      "question": "1 ÷ 2 = ?",
      "options": ["4", "1", "5", "0"],
      "answer": "0"
    },
    {
      "question": "7 ÷ 2 = ?",
      "options": ["3", "7", "8", "5"],
      "answer": "3"
    },
    {
      "question": "12 ÷ 2 = ?",
      "options": ["6", "9", "7", "10"],
      "answer": "6"
    },
    {
      "question": "10 ÷ 2 = ?",
      "options": ["10", "5", "6", "7"],
      "answer": "5"
    },
    {
      "question": "11 ÷ 2 = ?",
      "options": ["10", "5", "6", "7"],
      "answer": "5"
    },
    {
      "question": "10 ÷ 2 = ?",
      "options": ["7", "9", "10", "5"],
      "answer": "5"
    },
    {
      "question": "2 ÷ 2 = ?",
      "options": ["4", "6", "1", "3"],
      "answer": "1"
    },
    {
      "question": "13 ÷ 2 = ?",
      "options": ["7", "9", "6", "11"],
      "answer": "6"
    },
    {
      "question": "8 ÷ 2 = ?",
      "options": ["6", "5", "4", "9"],
      "answer": "4"
    },
    {
      "question": "5 ÷ 2 = ?",
      "options": ["2", "7", "3", "4"],
      "answer": "2"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level2Div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level2Div;