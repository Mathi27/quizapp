const level12Div = [
    {
      "question": "19 ÷ 12 = ?",
      "options": ["4", "2", "6", "1"],
      "answer": "1"
    },
    {
      "question": "40 ÷ 12 = ?",
      "options": ["6", "3", "7", "4"],
      "answer": "3"
    },
    {
      "question": "14 ÷ 12 = ?",
      "options": ["2", "3", "6", "1"],
      "answer": "1"
    },
    {
      "question": "45 ÷ 12 = ?",
      "options": ["6", "5", "7", "3"],
      "answer": "3"
    },
    {
      "question": "79 ÷ 12 = ?",
      "options": ["8", "9", "6", "7"],
      "answer": "6"
    },
    {
      "question": "117 ÷ 12 = ?",
      "options": ["14", "10", "9", "12"],
      "answer": "9"
    },
    {
      "question": "11 ÷ 12 = ?",
      "options": ["0", "5", "3", "4"],
      "answer": "0"
    },
    {
      "question": "92 ÷ 12 = ?",
      "options": ["10", "8", "7", "11"],
      "answer": "7"
    },
    {
      "question": "75 ÷ 12 = ?",
      "options": ["10", "6", "7", "8"],
      "answer": "6"
    },
    {
      "question": "55 ÷ 12 = ?",
      "options": ["9", "8", "7", "4"],
      "answer": "4"
    },
    {
      "question": "29 ÷ 12 = ?",
      "options": ["5", "7", "2", "4"],
      "answer": "2"
    },
    {
      "question": "76 ÷ 12 = ?",
      "options": ["8", "6", "11", "9"],
      "answer": "6"
    },
    {
      "question": "45 ÷ 12 = ?",
      "options": ["4", "3", "5", "8"],
      "answer": "3"
    },
    {
      "question": "102 ÷ 12 = ?",
      "options": ["12", "9", "11", "8"],
      "answer": "8"
    },
    {
      "question": "2 ÷ 12 = ?",
      "options": ["3", "2", "4", "0"],
      "answer": "0"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level12Div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level12Div;