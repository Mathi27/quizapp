import level1Questions from "./QuestionBank/level1.js";
import level2Questions from "./QuestionBank/level2.js";
import level3Questions from "./QuestionBank/level3.js";

export function questions(level){
   switch(level){
    case "0":
      return level1Questions;
    case "1":
      return level2Questions;
    case "2":
      return level3Questions;
    default:
      return [];
   }

}