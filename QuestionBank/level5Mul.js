const level5Mul = [
    {
      "question": "5 x 1 = ?",
      "options": ["3", "2", "8", "5"],
      "answer": "5"
    },
    {
      "question": "5 x 2 = ?",
      "options": ["15", "13", "4", "10"],
      "answer": "10"
    },
    {
      "question": "5 x 3 = ?",
      "options": ["16", "7", "15", "9"],
      "answer": "15"
    },
    {
      "question": "5 x 4 = ?",
      "options": ["23", "20", "14", "13"],
      "answer": "20"
    },
    {
      "question": "5 x 5 = ?",
      "options": ["27", "19", "35", "25"],
      "answer": "25"
    },
    {
      "question": "5 x 6 = ?",
      "options": ["35", "30", "34", "38"],
      "answer": "30"
    },
    {
      "question": "5 x 7 = ?",
      "options": ["35", "29", "38", "44"],
      "answer": "35"
    },
    {
      "question": "5 x 8 = ?",
      "options": ["41", "40", "37", "35"],
      "answer": "40"
    },
    {
      "question": "5 x 9 = ?",
      "options": ["45", "46", "36", "39"],
      "answer": "45"
    },
    {
      "question": "5 x 10 = ?",
      "options": ["52", "48", "50", "41"],
      "answer": "50"
    },
    {
      "question": "5 x 11 = ?",
      "options": ["58", "55", "53", "50"],
      "answer": "55"
    },
    {
      "question": "5 x 12 = ?",
      "options": ["61", "69", "60", "56"],
      "answer": "60"
    }
    ];

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level5Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });
    export default level5Mul;