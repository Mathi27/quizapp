const level10Div = [
    {
      "question": "89 ÷ 10 = ?",
      "options": ["12", "9", "10", "8"],
      "answer": "8"
    },
    {
      "question": "64 ÷ 10 = ?",
      "options": ["7", "11", "8", "6"],
      "answer": "6"
    },
    {
      "question": "70 ÷ 10 = ?",
      "options": ["12", "11", "8", "7"],
      "answer": "7"
    },
    {
      "question": "83 ÷ 10 = ?",
      "options": ["12", "10", "8", "9"],
      "answer": "8"
    },
    {
      "question": "49 ÷ 10 = ?",
      "options": ["7", "5", "6", "4"],
      "answer": "4"
    },
    {
      "question": "35 ÷ 10 = ?",
      "options": ["5", "3", "8", "4"],
      "answer": "3"
    },
    {
      "question": "15 ÷ 10 = ?",
      "options": ["4", "1", "2", "5"],
      "answer": "1"
    },
    {
      "question": "36 ÷ 10 = ?",
      "options": ["5", "3", "4", "6"],
      "answer": "3"
    },
    {
      "question": "18 ÷ 10 = ?",
      "options": ["4", "1", "2", "3"],
      "answer": "1"
    },
    {
      "question": "2 ÷ 10 = ?",
      "options": ["5", "1", "0", "2"],
      "answer": "0"
    },
    {
      "question": "78 ÷ 10 = ?",
      "options": ["11", "7", "12", "8"],
      "answer": "7"
    },
    {
      "question": "37 ÷ 10 = ?",
      "options": ["5", "4", "8", "3"],
      "answer": "3"
    },
    {
      "question": "92 ÷ 10 = ?",
      "options": ["9", "10", "14", "11"],
      "answer": "9"
    },
    {
      "question": "24 ÷ 10 = ?",
      "options": ["5", "2", "6", "7"],
      "answer": "2"
    },
    {
      "question": "73 ÷ 10 = ?",
      "options": ["12", "10", "8", "7"],
      "answer": "7"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level10Div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level10Div;