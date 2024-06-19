const level5Div = [
    {
      "question": "24 ÷ 5 = ?",
      "options": ["5", "7", "9", "4"],
      "answer": "4"
    },
    {
      "question": "49 ÷ 5 = ?",
      "options": ["13", "9", "12", "11"],
      "answer": "9"
    },
    {
      "question": "23 ÷ 5 = ?",
      "options": ["8", "6", "4", "7"],
      "answer": "4"
    },
    {
      "question": "33 ÷ 5 = ?",
      "options": ["6", "9", "8", "10"],
      "answer": "6"
    },
    {
      "question": "47 ÷ 5 = ?",
      "options": ["12", "9", "13", "11"],
      "answer": "9"
    },
    {
      "question": "21 ÷ 5 = ?",
      "options": ["4", "9", "7", "6"],
      "answer": "4"
    },
    {
      "question": "19 ÷ 5 = ?",
      "options": ["3", "8", "5", "6"],
      "answer": "3"
    },
    {
      "question": "37 ÷ 5 = ?",
      "options": ["7", "11", "8", "12"],
      "answer": "7"
    },
    {
      "question": "40 ÷ 5 = ?",
      "options": ["11", "12", "8", "10"],
      "answer": "8"
    },
    {
      "question": "15 ÷ 5 = ?",
      "options": ["5", "8", "3", "4"],
      "answer": "3"
    },
    {
      "question": "25 ÷ 5 = ?",
      "options": ["10", "6", "5", "7"],
      "answer": "5"
    },
    {
      "question": "4 ÷ 5 = ?",
      "options": ["0", "2", "5", "4"],
      "answer": "0"
    },
    {
      "question": "5 ÷ 5 = ?",
      "options": ["6", "1", "3", "2"],
      "answer": "1"
    },
    {
      "question": "9 ÷ 5 = ?",
      "options": ["1", "6", "4", "2"],
      "answer": "1"
    },
    {
      "question": "21 ÷ 5 = ?",
      "options": ["8", "5", "7", "4"],
      "answer": "4"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level5Div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level5Div;