const level11Mul = [
    {
      "question": "11 x 1 = ?",
      "options": ["16", "11", "19", "12"],
      "answer": "11"
    },
    {
      "question": "11 x 2 = ?",
      "options": ["16", "19", "22", "21"],
      "answer": "22"
    },
    {
      "question": "11 x 3 = ?",
      "options": ["39", "33", "37", "25"],
      "answer": "33"
    },
    {
      "question": "11 x 4 = ?",
      "options": ["44", "35", "34", "54"],
      "answer": "44"
    },
    {
      "question": "11 x 5 = ?",
      "options": ["47", "45", "52", "55"],
      "answer": "55"
    },
    {
      "question": "11 x 6 = ?",
      "options": ["73", "67", "58", "66"],
      "answer": "66"
    },
    {
      "question": "11 x 7 = ?",
      "options": ["69", "86", "77", "68"],
      "answer": "77"
    },
    {
      "question": "11 x 8 = ?",
      "options": ["91", "87", "81", "88"],
      "answer": "88"
    },
    {
      "question": "11 x 9 = ?",
      "options": ["109", "104", "99", "98"],
      "answer": "99"
    },
    {
      "question": "11 x 10 = ?",
      "options": ["119", "111", "110", "118"],
      "answer": "110"
    },
    {
      "question": "11 x 11 = ?",
      "options": ["126", "124", "121", "122"],
      "answer": "121"
    },
    {
      "question": "11 x 12 = ?",
      "options": ["137", "124", "132", "136"],
      "answer": "132"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level11Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });
    export default level11Mul;