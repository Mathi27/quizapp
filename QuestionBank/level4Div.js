const level4Div = [
    {
      "question": "12 ÷ 4 = ?",
      "options": ["8", "6", "3", "5"],
      "answer": "3"
    },
    {
      "question": "13 ÷ 4 = ?",
      "options": ["6", "8", "5", "3"],
      "answer": "3"
    },
    {
      "question": "31 ÷ 4 = ?",
      "options": ["7", "11", "10", "9"],
      "answer": "7"
    },
    {
      "question": "23 ÷ 4 = ?",
      "options": ["6", "8", "5", "7"],
      "answer": "5"
    },
    {
      "question": "10 ÷ 4 = ?",
      "options": ["7", "4", "2", "3"],
      "answer": "2"
    },
    {
      "question": "37 ÷ 4 = ?",
      "options": ["14", "9", "11", "12"],
      "answer": "9"
    },
    {
      "question": "17 ÷ 4 = ?",
      "options": ["4", "7", "5", "9"],
      "answer": "4"
    },
    {
      "question": "24 ÷ 4 = ?",
      "options": ["10", "6", "9", "7"],
      "answer": "6"
    },
    {
      "question": "10 ÷ 4 = ?",
      "options": ["6", "4", "2", "5"],
      "answer": "2"
    },
    {
      "question": "19 ÷ 4 = ?",
      "options": ["4", "9", "5", "7"],
      "answer": "4"
    },
    {
      "question": "14 ÷ 4 = ?",
      "options": ["5", "3", "7", "4"],
      "answer": "3"
    },
    {
      "question": "22 ÷ 4 = ?",
      "options": ["10", "5", "6", "8"],
      "answer": "5"
    },
    {
      "question": "11 ÷ 4 = ?",
      "options": ["3", "2", "6", "4"],
      "answer": "2"
    },
    {
      "question": "3 ÷ 4 = ?",
      "options": ["2", "1", "0", "3"],
      "answer": "0"
    },
    {
      "question": "33 ÷ 4 = ?",
      "options": ["10", "12", "8", "11"],
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
  
  level4Div.forEach(question => {
    question.options = shuffleArray(question.options);
  });
  
export default level4Div;