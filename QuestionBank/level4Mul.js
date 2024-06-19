const level4Mul = [
    {
      "question": "4 x 1 = ?",
      "options": ["10", "4", "6", "11"],
      "answer": "4"
    },
    {
      "question": "4 x 2 = ?",
      "options": ["17", "11", "4", "8"],
      "answer": "8"
    },
    {
      "question": "4 x 3 = ?",
      "options": ["5", "21", "19", "12"],
      "answer": "12"
    },
    {
      "question": "4 x 4 = ?",
      "options": ["23", "16", "7", "17"],
      "answer": "16"
    },
    {
      "question": "4 x 5 = ?",
      "options": ["20", "19", "13", "17"],
      "answer": "20"
    },
    {
      "question": "4 x 6 = ?",
      "options": ["30", "24", "26", "17"],
      "answer": "24"
    },
    {
      "question": "4 x 7 = ?",
      "options": ["27", "28", "29", "32"],
      "answer": "28"
    },
    {
      "question": "4 x 8 = ?",
      "options": ["22", "40", "32", "29"],
      "answer": "32"
    },
    {
      "question": "4 x 9 = ?",
      "options": ["30", "36", "41", "37"],
      "answer": "36"
    },
    {
      "question": "4 x 10 = ?",
      "options": ["38", "35", "37", "40"],
      "answer": "40"
    },
    {
      "question": "4 x 11 = ?",
      "options": ["48", "44", "45", "34"],
      "answer": "44"
    },
    {
      "question": "4 x 12 = ?",
      "options": ["49", "48", "47", "46"],
      "answer": "48"
    }
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level4Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });
    export default level4Mul;