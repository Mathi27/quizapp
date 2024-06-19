const level3Div = [
    {
      "question": "19 ÷ 3 = ?",
      "options": ["8", "9", "6", "7"],
      "answer": "6"
    },
    {
      "question": "17 ÷ 3 = ?",
      "options": ["6", "7", "8", "5"],
      "answer": "5"
    },
    {
      "question": "30 ÷ 3 = ?",
      "options": ["15", "13", "12", "10"],
      "answer": "10"
    },
    {
      "question": "1 ÷ 3 = ?",
      "options": ["0", "1", "5", "2"],
      "answer": "0"
    },
    {
      "question": "26 ÷ 3 = ?",
      "options": ["11", "12", "13", "8"],
      "answer": "8"
    },
    {
      "question": "26 ÷ 3 = ?",
      "options": ["8", "11", "13", "9"],
      "answer": "8"
    },
    {
      "question": "4 ÷ 3 = ?",
      "options": ["5", "2", "1", "6"],
      "answer": "1"
    },
    {
      "question": "13 ÷ 3 = ?",
      "options": ["8", "4", "9", "6"],
      "answer": "4"
    },
    {
      "question": "15 ÷ 3 = ?",
      "options": ["8", "7", "5", "9"],
      "answer": "5"
    },
    {
      "question": "13 ÷ 3 = ?",
      "options": ["4", "5", "9", "7"],
      "answer": "4"
    },
    {
      "question": "6 ÷ 3 = ?",
      "options": ["4", "6", "3", "2"],
      "answer": "2"
    },
    {
      "question": "14 ÷ 3 = ?",
      "options": ["4", "5", "6", "7"],
      "answer": "4"
    },
    {
      "question": "4 ÷ 3 = ?",
      "options": ["3", "2", "6", "1"],
      "answer": "1"
    },
    {
      "question": "22 ÷ 3 = ?",
      "options": ["9", "8", "10", "7"],
      "answer": "7"
    },
    {
      "question": "11 ÷ 3 = ?",
      "options": ["5", "6", "4", "3"],
      "answer": "3"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level3Div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level3Div;