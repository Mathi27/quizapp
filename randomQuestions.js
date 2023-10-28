/**
 * @author Schidster Adinson <schidsteradinson@gmail.com>
 */
 
// The highest number wanted in the tables
const tableOrder = 12

// Create Empty(null) array with required dimension
const tables = [...Array(tableOrder + 1)].map(_ => Array(tableOrder + 1).fill(null))

// Fill it with multiplication tables
for (let i = 0; i < tableOrder + 1; i++) {
    for (let j = 0; j < tableOrder + 1; j++) {
        tables[i][j] = i * j;
    }
}

// Get Random Integer with min and max(inclusive)
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Get Random Item From 2D Array
function getRandomItem(arr) {
    let n, i, j;
    // tableOrder - 1 because we don't need 0s and 1s
    n = getRandomInt(1, (tableOrder-1) * (tableOrder-1));
    i = Math.ceil(n/(tableOrder - 1)) - 1;
    j = (n % (tableOrder - 1)) - 1;
    // adding 2 to avoid 0s and 1s
    return arr[i+2][j+2];
}

function getRandomQuestion() {
    let i, j, question;
    // Starting from 2, to avoid 0s and 1s
    i = getRandomInt(2, tableOrder);
    j = getRandomInt(2, tableOrder);
    
    question = `${i} x ${j} = ?`;
    answer = tables[i][j];
    options = [getRandomItem(tables),
                getRandomItem(tables),
                getRandomItem(tables)];
    options.splice(getRandomInt(0, 3), 0, answer);
    
    return {question, options, answer};
}

export function getRandomQuestions(n) {
  let questions = [];
  for (let i = 0; i < n; i++) {
    questions.push(getRandomQuestion());
  }
  return questions;
}
  
