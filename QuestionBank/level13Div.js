const level13Div = [
    {
      "question": "14 ÷ 13 = ?",
      "options": ["4", "5", "6", "1"],
      "answer": "1"
    },
    {
      "question": "111 ÷ 13 = ?",
      "options": ["8", "13", "10", "12"],
      "answer": "8"
    },
    {
      "question": "104 ÷ 13 = ?",
      "options": ["12", "11", "10", "8"],
      "answer": "8"
    },
    {
      "question": "6 ÷ 13 = ?",
      "options": ["4", "2", "0", "1"],
      "answer": "0"
    },
    {
      "question": "93 ÷ 13 = ?",
      "options": ["8", "10", "11", "7"],
      "answer": "7"
    },
    {
      "question": "28 ÷ 13 = ?",
      "options": ["6", "5", "4", "2"],
      "answer": "2"
    },
    {
      "question": "54 ÷ 13 = ?",
      "options": ["5", "8", "4", "7"],
      "answer": "4"
    },
    {
      "question": "42 ÷ 13 = ?",
      "options": ["5", "6", "4", "3"],
      "answer": "3"
    },
    {
      "question": "96 ÷ 13 = ?",
      "options": ["11", "10", "7", "12"],
      "answer": "7"
    },
    {
      "question": "17 ÷ 13 = ?",
      "options": ["3", "1", "5", "2"],
      "answer": "1"
    },
    {
      "question": "93 ÷ 13 = ?",
      "options": ["8", "12", "10", "7"],
      "answer": "7"
    },
    {
      "question": "54 ÷ 13 = ?",
      "options": ["4", "9", "6", "7"],
      "answer": "4"
    },
    {
      "question": "89 ÷ 13 = ?",
      "options": ["6", "10", "8", "7"],
      "answer": "6"
    },
    {
      "question": "29 ÷ 13 = ?",
      "options": ["2", "3", "7", "6"],
      "answer": "2"
    },
    {
      "question": "86 ÷ 13 = ?",
      "options": ["7", "10", "6", "8"],
      "answer": "6"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level13Div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level13Div;