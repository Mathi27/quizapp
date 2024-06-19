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
 
import level1SubQuestions from "./QuestionBank/level1Sub.js";
import level2SubQuestions from "./QuestionBank/level2Sub.js";
import level3SubQuestions from "./QuestionBank/level3Sub.js";
import level4SubQuestions from "./QuestionBank/level4Sub.js";
import level5SubQuestions from "./QuestionBank/level5Sub.js";
import level6SubQuestions from "./QuestionBank/level6Sub.js";
import level7SubQuestions from "./QuestionBank/level7Sub.js";
import level8SubQuestions from "./QuestionBank/level8Sub.js";
import level9SubQuestions from "./QuestionBank/level9Sub.js";
import level10questions from "./QuestionBank/level10.js";
import level10Subquestions from "./QuestionBank/level10Sub.js";
export function questions(level,mathlevel){
   switch(level){
    case "0":
      if(mathlevel == "add"){
        // addition questions
        console.log(`----math level ${mathlevel}-----`);
        return  level1Questions;
      }else if(mathlevel == "sub"){
         
        // subraction questions
         return level1SubQuestions;
      }
      break;
    case "1":
      if(mathlevel == 'add'){
        return level2Questions;
      }else if(mathlevel == 'sub'){
         return level2SubQuestions;
      }
      break;
    case "2":
      if(mathlevel == 'add'){
        return level3Questions;
      }else if(mathlevel == "sub"){
        return level3SubQuestions; 
      }
      break;
    case "3":
      if(mathlevel == 'add'){
         return level4Questions;
      }else if(mathlevel == "sub"){
         return level4SubQuestions;
      }
       break;
    case "4":
      if(mathlevel == 'add'){
         return level5questions;
      }else if(mathlevel == "sub"){
         return level5SubQuestions;
      }
       break;
    case "5":
      if(mathlevel == 'add'){
        return level6questions;
      }else if(mathlevel == "sub"){
         return level6SubQuestions;
      }
      break;
    case "6":
      if(mathlevel == 'add'){
         return level7Questions;
      }else if(mathlevel == "sub"){
        return level7SubQuestions;
      }
      break;
 
    case "7":
      if(mathlevel == 'add'){
       return level8questions;
      }else if(mathlevel == "sub"){
       return level8SubQuestions;
      }
       break;
    case "8":
      if(mathlevel == 'add'){
         return level9questions;
      }else if(mathlevel == "sub"){
          return level9SubQuestions;
      }
      break;
     
    case "9":
      
    if(mathlevel == 'add'){
      return level10questions;
   }else if(mathlevel == "sub"){
       return level10Subquestions;
   }
   break;
     
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