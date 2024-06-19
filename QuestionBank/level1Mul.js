const level1Mul = [
    {
        "question": "1 x 1 = ?",
        "options": ["3", "9", "1", "11"],
        "answer": "1"
      },
      {
        "question": "1 x 2 = ?",
        "options": ["2", "7", "4", "8"],
        "answer": "2"
      },
      {
        "question": "1 x 3 = ?",
        "options": ["3", "7", "12", "6"],
        "answer": "3"
      },
      {
        "question": "1 x 4 = ?",
        "options": ["2", "12", "10", "4"],
        "answer": "4"
      },
      {
        "question": "1 x 5 = ?",
        "options": ["11", "5", "1", "15"],
        "answer": "5"
      },
      {
        "question": "1 x 6 = ?",
        "options": ["9", "3", "6", "16"],
        "answer": "6"
      },
      {
        "question": "1 x 7 = ?",
        "options": ["4", "11", "7", "2"],
        "answer": "7"
      },
      {
        "question": "1 x 8 = ?",
        "options": ["10", "7", "8", "17"],
        "answer": "8"
      },
      {
        "question": "1 x 9 = ?",
        "options": ["13", "2", "6", "9"],
        "answer": "9"
      },
      {
        "question": "1 x 10 = ?",
        "options": ["16", "6", "2", "10"],
        "answer": "10"
      },
      {
        "question": "1 x 11 = ?",
        "options": ["11", "19", "13", "2"],
        "answer": "11"
      },
      {
        "question": "1 x 12 = ?",
        "options": ["3", "8", "19", "12"],
        "answer": "12"
      }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  level1Mul.forEach(question => {
    question.options = shuffleArray(question.options);
  });
  
  export default level1Mul;
