const level15div = [
    {
      "question": "37 ÷ 15 = ?",
      "options": ["5", "3", "7", "2"],
      "answer": "2"
    },
    {
      "question": "101 ÷ 15 = ?",
      "options": ["11", "8", "6", "9"],
      "answer": "6"
    },
    {
      "question": "59 ÷ 15 = ?",
      "options": ["6", "7", "3", "8"],
      "answer": "3"
    },
    {
      "question": "92 ÷ 15 = ?",
      "options": ["10", "6", "9", "8"],
      "answer": "6"
    },
    {
      "question": "8 ÷ 15 = ?",
      "options": ["0", "5", "4", "1"],
      "answer": "0"
    },
    {
      "question": "39 ÷ 15 = ?",
      "options": ["2", "4", "6", "7"],
      "answer": "2"
    },
    {
      "question": "112 ÷ 15 = ?",
      "options": ["11", "9", "10", "7"],
      "answer": "7"
    },
    {
      "question": "63 ÷ 15 = ?",
      "options": ["8", "4", "6", "5"],
      "answer": "4"
    },
    {
      "question": "86 ÷ 15 = ?",
      "options": ["8", "5", "7", "6"],
      "answer": "5"
    },
    {
      "question": "2 ÷ 15 = ?",
      "options": ["2", "1", "3", "0"],
      "answer": "0"
    },
    {
      "question": "97 ÷ 15 = ?",
      "options": ["11", "6", "10", "9"],
      "answer": "6"
    },
    {
      "question": "29 ÷ 15 = ?",
      "options": ["1", "4", "5", "3"],
      "answer": "1"
    },
    {
      "question": "95 ÷ 15 = ?",
      "options": ["9", "11", "6", "10"],
      "answer": "6"
    },
    {
      "question": "64 ÷ 15 = ?",
      "options": ["9", "4", "6", "5"],
      "answer": "4"
    },
    {
      "question": "141 ÷ 15 = ?",
      "options": ["9", "11", "13", "14"],
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
      
      level15div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level15div;