import level1Questions from "./QuestionBank/level1.js";
import level11questions from "./QuestionBank/level11.js";
import level12questions from "./QuestionBank/level12.js";
import level13questions from "./QuestionBank/level13.js";
import level14questions from "./QuestionBank/level14.js";
import level15questions from "./QuestionBank/level15.js";
import level16questions from "./QuestionBank/level16.js";
import level17questions from "./QuestionBank/level17.js";
import level18questions from "./QuestionBank/level18.js";
import level19questions from "./QuestionBank/level19.js";
import level2Questions from "./QuestionBank/level2.js";
import level20questions from "./QuestionBank/level20.js";
import level21questions from "./QuestionBank/level21.js";
import level3Questions from "./QuestionBank/level3.js";
import level4Questions from "./QuestionBank/level4.js";
import level5questions from "./QuestionBank/level5.js";
import level6questions from "./QuestionBank/level6.js";
import level7Questions from "./QuestionBank/level7.js";
import level8questions from "./QuestionBank/level8.js";
import level9questions from "./QuestionBank/level9.js";
 

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
    case "7":
      return level8questions;
    case "8":
      return level9questions;
    case "9":
      return level1Questions;
    case "10":
      return level11questions;
    case "11":
      return level12questions;
    case "12":
      return level13questions;
    case "13":
      return level14questions;
    case "14":
      return level15questions;
    case "15":
      return level16questions;
      case "16":
        return level17questions;
        case "17":
          return level18questions;
          case "18":
            return level19questions;
            case "19":
              return level20questions;
               case "20":
                return level21questions;
                
                      
        
    default:
      return [];
   }

}