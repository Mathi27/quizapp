const level2Mul = [
    {
        "question": "2 x 1 = ?",
        "options": ["8", "2", "9", "1"],
        "answer": "2"
      },
      {
        "question": "2 x 2 = ?",
        "options": ["4", "2", "12", "5"],
        "answer": "4"
      },
      {
        "question": "2 x 3 = ?",
        "options": ["13", "1", "15", "6"],
        "answer": "6"
      },
      {
        "question": "2 x 4 = ?",
        "options": ["8", "1", "12", "2"],
        "answer": "8"
      },
      {
        "question": "2 x 5 = ?",
        "options": ["13", "4", "10", "16"],
        "answer": "10"
      },
      {
        "question": "2 x 6 = ?",
        "options": ["3", "12", "5", "21"],
        "answer": "12"
      },
      {
        "question": "2 x 7 = ?",
        "options": ["8", "14", "11", "4"],
        "answer": "14"
      },
      {
        "question": "2 x 8 = ?",
        "options": ["24", "15", "23", "16"],
        "answer": "16"
      },
      {
        "question": "2 x 9 = ?",
        "options": ["9", "18", "13", "23"],
        "answer": "18"
      },
      {
        "question": "2 x 10 = ?",
        "options": ["10", "20", "27", "14"],
        "answer": "20"
      },
      {
        "question": "2 x 11 = ?",
        "options": ["21", "12", "22", "25"],
        "answer": "22"
      },
      {
        "question": "2 x 12 = ?",
        "options": ["24", "23", "27", "28"],
        "answer": "24"
      }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  level2Mul.forEach(question => {
    question.options = shuffleArray(question.options);
  });
  
  export default level2Mul;
