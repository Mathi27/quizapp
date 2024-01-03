import level1Questions from "./QuestionBank/level1.js";
import level2Questions from "./QuestionBank/level2.js";
import level3Questions from "./QuestionBank/level3.js";
import level4Questions from "./QuestionBank/level4.js";
import level5questions from "./QuestionBank/level5.js";
import level6questions from "./QuestionBank/level6.js";
import level7Questions from "./QuestionBank/level7.js";


export function questions(level){
   switch(level){
    case "0":
      return level1Questions;
    case "1":
      return level2Questions;
    case "2":
      return level3Questions;
      case "3":
        return level4Questions;
        case "4":
          return level5questions;
          case "5":
            return level6questions;
            case "6":
              return level7Questions;
    default:
      return [];
   }

}