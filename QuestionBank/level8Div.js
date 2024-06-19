const level8Div = [
    {
      "question": "37 ÷ 8 = ?",
      "options": ["4", "6", "8", "9"],
      "answer": "4"
    },
    {
      "question": "37 ÷ 8 = ?",
      "options": ["4", "6", "8", "9"],
      "answer": "4"
    },
    {
      "question": "78 ÷ 8 = ?",
      "options": ["12", "10", "11", "9"],
      "answer": "9"
    },
    {
      "question": "60 ÷ 8 = ?",
      "options": ["7", "8", "10", "11"],
      "answer": "7"
    },
    {
      "question": "21 ÷ 8 = ?",
      "options": ["5", "6", "7", "2"],
      "answer": "2"
    },
    {
      "question": "44 ÷ 8 = ?",
      "options": ["5", "6", "10", "7"],
      "answer": "5"
    },
    {
      "question": "39 ÷ 8 = ?",
      "options": ["7", "4", "9", "5"],
      "answer": "4"
    },
    {
      "question": "51 ÷ 8 = ?",
      "options": ["11", "8", "9", "6"],
      "answer": "6"
    },
    {
      "question": "70 ÷ 8 = ?",
      "options": ["8", "9", "13", "11"],
      "answer": "8"
    },
    {
      "question": "55 ÷ 8 = ?",
      "options": ["7", "10", "9", "6"],
      "answer": "6"
    },
    {
      "question": "71 ÷ 8 = ?",
      "options": ["12", "8", "13", "10"],
      "answer": "8"
    },
    {
      "question": "57 ÷ 8 = ?",
      "options": ["11", "9", "7", "8"],
      "answer": "7"
    },
    {
      "question": "75 ÷ 8 = ?",
      "options": ["11", "12", "13", "9"],
      "answer": "9"
    },
    {
      "question": "48 ÷ 8 = ?",
      "options": ["8", "7", "11", "6"],
      "answer": "6"
    },
    {
      "question": "33 ÷ 8 = ?",
      "options": ["7", "5", "4", "9"],
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
      
      level8Div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level8Div;