const level14Div = [
    {
      "question": "45 ÷ 14 = ?",
      "options": ["7", "6", "3", "4"],
      "answer": "3"
    },
    {
      "question": "120 ÷ 14 = ?",
      "options": ["11", "12", "8", "10"],
      "answer": "8"
    },
    {
      "question": "6 ÷ 14 = ?",
      "options": ["1", "3", "0", "5"],
      "answer": "0"
    },
    {
      "question": "58 ÷ 14 = ?",
      "options": ["7", "4", "8", "5"],
      "answer": "4"
    },
    {
      "question": "12 ÷ 14 = ?",
      "options": ["1", "5", "3", "0"],
      "answer": "0"
    },
    {
      "question": "97 ÷ 14 = ?",
      "options": ["10", "8", "6", "9"],
      "answer": "6"
    },
    {
      "question": "14 ÷ 14 = ?",
      "options": ["6", "1", "4", "2"],
      "answer": "1"
    },
    {
      "question": "6 ÷ 14 = ?",
      "options": ["5", "1", "0", "4"],
      "answer": "0"
    },
    {
      "question": "89 ÷ 14 = ?",
      "options": ["8", "7", "6", "10"],
      "answer": "6"
    },
    {
      "question": "22 ÷ 14 = ?",
      "options": ["4", "3", "6", "1"],
      "answer": "1"
    },
    {
      "question": "59 ÷ 14 = ?",
      "options": ["6", "4", "5", "8"],
      "answer": "4"
    },
    {
      "question": "62 ÷ 14 = ?",
      "options": ["4", "5", "6", "8"],
      "answer": "4"
    },
    {
      "question": "127 ÷ 14 = ?",
      "options": ["13", "12", "11", "9"],
      "answer": "9"
    },
    {
      "question": "18 ÷ 14 = ?",
      "options": ["1", "6", "4", "2"],
      "answer": "1"
    },
    {
      "question": "18 ÷ 14 = ?",
      "options": ["3", "1", "5", "6"],
      "answer": "1"
    }
];
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  level14Div.forEach(question => {
    question.options = shuffleArray(question.options);
  });
  
    export default level14Div;