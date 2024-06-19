const level11Div = [
    {
      "question": "78 ÷ 11 = ?",
      "options": ["8", "9", "10", "7"],
      "answer": "7"
    },
    {
      "question": "40 ÷ 11 = ?",
      "options": ["3", "5", "4", "8"],
      "answer": "3"
    },
    {
      "question": "14 ÷ 11 = ?",
      "options": ["3", "1", "6", "4"],
      "answer": "1"
    },
    {
      "question": "1 ÷ 11 = ?",
      "options": ["0", "4", "3", "1"],
      "answer": "0"
    },
    {
      "question": "71 ÷ 11 = ?",
      "options": ["6", "10", "8", "11"],
      "answer": "6"
    },
    {
      "question": "11 ÷ 11 = ?",
      "options": ["2", "4", "1", "3"],
      "answer": "1"
    },
    {
      "question": "52 ÷ 11 = ?",
      "options": ["6", "5", "9", "4"],
      "answer": "4"
    },
    {
      "question": "37 ÷ 11 = ?",
      "options": ["3", "8", "6", "4"],
      "answer": "3"
    },
    {
      "question": "62 ÷ 11 = ?",
      "options": ["8", "6", "10", "5"],
      "answer": "5"
    },
    {
      "question": "78 ÷ 11 = ?",
      "options": ["7", "8", "11", "9"],
      "answer": "7"
    },
    {
      "question": "42 ÷ 11 = ?",
      "options": ["6", "7", "3", "8"],
      "answer": "3"
    },
    {
      "question": "7 ÷ 11 = ?",
      "options": ["2", "0", "3", "1"],
      "answer": "0"
    },
    {
      "question": "6 ÷ 11 = ?",
      "options": ["4", "0", "3", "2"],
      "answer": "0"
    },
    {
      "question": "21 ÷ 11 = ?",
      "options": ["1", "2", "3", "5"],
      "answer": "1"
    },
    {
      "question": "27 ÷ 11 = ?",
      "options": ["7", "3", "2", "6"],
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
      
      level11Div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level11Div;