const level7Div = [
    {
      "question": "70 ÷ 7 = ?",
      "options": ["13", "10", "14", "11"],
      "answer": "10"
    },
    {
      "question": "49 ÷ 7 = ?",
      "options": ["10", "8", "11", "7"],
      "answer": "7"
    },
    {
      "question": "44 ÷ 7 = ?",
      "options": ["6", "10", "8", "9"],
      "answer": "6"
    },
    {
      "question": "44 ÷ 7 = ?",
      "options": ["10", "8", "6", "9"],
      "answer": "6"
    },
    {
      "question": "39 ÷ 7 = ?",
      "options": ["6", "7", "10", "5"],
      "answer": "5"
    },
    {
      "question": "27 ÷ 7 = ?",
      "options": ["7", "8", "4", "3"],
      "answer": "3"
    },
    {
      "question": "9 ÷ 7 = ?",
      "options": ["2", "5", "3", "1"],
      "answer": "1"
    },
    {
      "question": "9 ÷ 7 = ?",
      "options": ["4", "2", "1", "3"],
      "answer": "1"
    },
    {
      "question": "1 ÷ 7 = ?",
      "options": ["2", "0", "3", "1"],
      "answer": "0"
    },
    {
      "question": "16 ÷ 7 = ?",
      "options": ["6", "7", "5", "2"],
      "answer": "2"
    },
    {
      "question": "44 ÷ 7 = ?",
      "options": ["6", "11", "7", "9"],
      "answer": "6"
    },
    {
      "question": "45 ÷ 7 = ?",
      "options": ["6", "7", "8", "9"],
      "answer": "6"
    },
    {
      "question": "16 ÷ 7 = ?",
      "options": ["2", "3", "4", "5"],
      "answer": "2"
    },
    {
      "question": "9 ÷ 7 = ?",
      "options": ["6", "2", "3", "1"],
      "answer": "1"
    },
    {
      "question": "57 ÷ 7 = ?",
      "options": ["9", "10", "12", "8"],
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
      
      level7Div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level7Div;