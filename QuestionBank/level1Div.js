const level1Div = [
    {
      "question": "10 ÷ 1 = ?",
      "options": ["12", "10", "14", "15"],
      "answer": "10"
    },
    {
      "question": "5 ÷ 1 = ?",
      "options": ["10", "6", "5", "9"],
      "answer": "5"
    },
    {
      "question": "9 ÷ 1 = ?",
      "options": ["9", "11", "13", "12"],
      "answer": "9"
    },
    {
      "question": "9 ÷ 1 = ?",
      "options": ["9", "12", "13", "10"],
      "answer": "9"
    },
    {
      "question": "3 ÷ 1 = ?",
      "options": ["7", "5", "3", "8"],
      "answer": "3"
    },
    {
      "question": "10 ÷ 1 = ?",
      "options": ["10", "14", "15", "12"],
      "answer": "10"
    },
    {
      "question": "4 ÷ 1 = ?",
      "options": ["5", "7", "9", "4"],
      "answer": "4"
    },
    {
      "question": "2 ÷ 1 = ?",
      "options": ["7", "6", "5", "2"],
      "answer": "2"
    },
    {
      "question": "6 ÷ 1 = ?",
      "options": ["6", "11", "9", "10"],
      "answer": "6"
    },
    {
      "question": "3 ÷ 1 = ?",
      "options": ["8", "6", "7", "3"],
      "answer": "3"
    },
    {
      "question": "9 ÷ 1 = ?",
      "options": ["13", "14", "10", "9"],
      "answer": "9"
    },
    {
      "question": "1 ÷ 1 = ?",
      "options": ["4", "5", "2", "1"],
      "answer": "1"
    },
    {
      "question": "3 ÷ 1 = ?",
      "options": ["4", "3", "5", "6"],
      "answer": "3"
    },
    {
      "question": "3 ÷ 1 = ?",
      "options": ["7", "3", "6", "4"],
      "answer": "3"
    },
    {
      "question": "9 ÷ 1 = ?",
      "options": ["10", "12", "9", "13"],
      "answer": "9"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level1Div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level1Div;