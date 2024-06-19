const level6div = [
    {
      "question": "26 ÷ 6 = ?",
      "options": ["4", "8", "7", "6"],
      "answer": "4"
    },
    {
      "question": "13 ÷ 6 = ?",
      "options": ["4", "5", "2", "3"],
      "answer": "2"
    },
    {
      "question": "26 ÷ 6 = ?",
      "options": ["7", "4", "8", "6"],
      "answer": "4"
    },
    {
      "question": "41 ÷ 6 = ?",
      "options": ["10", "8", "11", "6"],
      "answer": "6"
    },
    {
      "question": "9 ÷ 6 = ?",
      "options": ["1", "4", "6", "5"],
      "answer": "1"
    },
    {
      "question": "15 ÷ 6 = ?",
      "options": ["3", "4", "6", "2"],
      "answer": "2"
    },
    {
      "question": "46 ÷ 6 = ?",
      "options": ["10", "12", "11", "7"],
      "answer": "7"
    },
    {
      "question": "2 ÷ 6 = ?",
      "options": ["4", "0", "5", "1"],
      "answer": "0"
    },
    {
      "question": "30 ÷ 6 = ?",
      "options": ["7", "5", "10", "8"],
      "answer": "5"
    },
    {
      "question": "17 ÷ 6 = ?",
      "options": ["3", "6", "2", "7"],
      "answer": "2"
    },
    {
      "question": "20 ÷ 6 = ?",
      "options": ["3", "7", "8", "4"],
      "answer": "3"
    },
    {
      "question": "38 ÷ 6 = ?",
      "options": ["10", "8", "9", "6"],
      "answer": "6"
    },
    {
      "question": "2 ÷ 6 = ?",
      "options": ["2", "4", "1", "0"],
      "answer": "0"
    },
    {
      "question": "51 ÷ 6 = ?",
      "options": ["13", "8", "12", "10"],
      "answer": "8"
    },
    {
      "question": "13 ÷ 6 = ?",
      "options": ["5", "4", "2", "7"],
      "answer": "2"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level6div.forEach(question => {
        question.options = shuffleArray(question.options);
      });
      
    export default level6div;