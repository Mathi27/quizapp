const level15Mul = [
    {
      "question": "15 x 1 = ?",
      "options": ["12", "10", "5", "15"],
      "answer": "15"
    },
    {
      "question": "15 x 2 = ?",
      "options": ["27", "39", "24", "30"],
      "answer": "30"
    },
    {
      "question": "15 x 3 = ?",
      "options": ["42", "54", "55", "45"],
      "answer": "45"
    },
    {
      "question": "15 x 4 = ?",
      "options": ["62", "56", "50", "60"],
      "answer": "60"
    },
    {
      "question": "15 x 5 = ?",
      "options": ["73", "74", "75", "83"],
      "answer": "75"
    },
    {
      "question": "15 x 6 = ?",
      "options": ["80", "90", "100", "95"],
      "answer": "90"
    },
    {
      "question": "15 x 7 = ?",
      "options": ["98", "105", "100", "110"],
      "answer": "105"
    },
    {
      "question": "15 x 8 = ?",
      "options": ["120", "116", "114", "111"],
      "answer": "120"
    },
    {
      "question": "15 x 9 = ?",
      "options": ["131", "135", "133", "129"],
      "answer": "135"
    },
    {
      "question": "15 x 10 = ?",
      "options": ["150", "151", "140", "145"],
      "answer": "150"
    },
    {
      "question": "15 x 11 = ?",
      "options": ["173", "165", "168", "174"],
      "answer": "165"
    },
    {
      "question": "15 x 12 = ?",
      "options": ["190", "173", "183", "180"],
      "answer": "180"
    }
    ];
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      }
      
      level15Mul.forEach(question => {
        question.options = shuffleArray(question.options);
      });
    export default level15Mul;