const level3Mul = [
    {
        "question": "3 x 1 = ?",
        "options": ["7", "3", "11", "13"],
        "answer": "3"
      },
      {
        "question": "3 x 2 = ?",
        "options": ["9", "8", "6", "16"],
        "answer": "6"
      },
      {
        "question": "3 x 3 = ?",
        "options": ["13", "17", "15", "9"],
        "answer": "9"
      },
      {
        "question": "3 x 4 = ?",
        "options": ["13", "12", "10", "16"],
        "answer": "12"
      },
      {
        "question": "3 x 5 = ?",
        "options": ["9", "19", "5", "15"],
        "answer": "15"
      },
      {
        "question": "3 x 6 = ?",
        "options": ["17", "24", "8", "18"],
        "answer": "18"
      },
      {
        "question": "3 x 7 = ?",
        "options": ["26", "21", "16", "18"],
        "answer": "21"
      },
      {
        "question": "3 x 8 = ?",
        "options": ["30", "22", "24", "33"],
        "answer": "24"
      },
      {
        "question": "3 x 9 = ?",
        "options": ["25", "36", "30", "27"],
        "answer": "27"
      },
      {
        "question": "3 x 10 = ?",
        "options": ["35", "30", "29", "32"],
        "answer": "30"
      },
      {
        "question": "3 x 11 = ?",
        "options": ["33", "41", "26", "39"],
        "answer": "33"
      },
      {
        "question": "3 x 12 = ?",
        "options": ["37", "39", "41", "36"],
        "answer": "36"
      }
];


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  level3Mul.forEach(question => {
    question.options = shuffleArray(question.options);
  });
  
  export default level3Mul;