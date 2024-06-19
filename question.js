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
import level1Mul from "./QuestionBank/level1Mul.js";
import level2Mul from "./QuestionBank/level2Mul.js";
import level3Mul from "./QuestionBank/level3Mul.js";
import level4Mul from "./QuestionBank/level4Mul.js";
import level5Mul from "./QuestionBank/level5Mul.js";
import level6Mul from "./QuestionBank/level6Mul.js";
import level7Mul from "./QuestionBank/level7Mul.js";
import level8Mul from "./QuestionBank/level8Mul.js";
import level9Mul from "./QuestionBank/level9Mul.js";
import level10Mul from "./QuestionBank/level10Mul.js";
import level11Mul from "./QuestionBank/level11Mul.js";
import level12Mul from "./QuestionBank/level12Mul.js";
import level13Mul from "./QuestionBank/level13Mul.js";
import level14Mul from "./QuestionBank/level14Mul.js";
import level15Mul from "./QuestionBank/level15Mul.js";
export function questions(level,mathlevel){
   switch(level){
    case "1":
      if(mathlevel == "add"){
        // addition questions
        console.log(`----math level ${mathlevel}-----`);
        return  level1Questions;
      }else if(mathlevel == "sub"){
         
        // subraction questions
         return level1SubQuestions;
      }else if(mathlevel == "mul"){
          return level1Mul;
      }
      break;
    case "2":
      if(mathlevel == 'add'){
        return level2Questions;
      }else if(mathlevel == 'sub'){
         return level2SubQuestions;
      }else if(mathlevel == "mul"){
        return level2Mul;
    }
      break;
    case "3":
      if(mathlevel == 'add'){
        return level3Questions;
      }else if(mathlevel == "sub"){
        return level3SubQuestions; 
      }
      else if(mathlevel == "mul"){
        return level3Mul;
    }
      break;
    case "4":
      if(mathlevel == 'add'){
         return level4Questions;
      }else if(mathlevel == "sub"){
         return level4SubQuestions;
      }else if(mathlevel == "mul"){
        return level4Mul;
    }
       break;
    case "5":
      if(mathlevel == 'add'){
         return level5questions;
      }else if(mathlevel == "sub"){
         return level5SubQuestions;
      }else if(mathlevel == "mul"){
        return level5Mul;
    }
       break;
    case "6":
      if(mathlevel == 'add'){
        return level6questions;
      }else if(mathlevel == "sub"){
         return level6SubQuestions;
      }else if(mathlevel == "mul"){
        return level6Mul;
    }
      break;
    case "7":
      if(mathlevel == 'add'){
         return level7Questions;
      }else if(mathlevel == "sub"){
        return level7SubQuestions;
      }else if(mathlevel == "mul"){
        return level7Mul;
    }
      break;
 
    case "8":
      if(mathlevel == 'add'){
       return level8questions;
      }else if(mathlevel == "sub"){
       return level8SubQuestions;
      }else if(mathlevel == "mul"){
        return level8Mul;
    }
       break;
    case "9":
      if(mathlevel == 'add'){
         return level9questions;
      }else if(mathlevel == "sub"){
          return level9SubQuestions;
      }else if(mathlevel == "mul"){
        return level9Mul;
    }
      break;
     
    case "10":
      
    if(mathlevel == 'add'){
      return level10questions;
   }else if(mathlevel == "sub"){
       return level10Subquestions;
   }else if(mathlevel == "mul"){
    return level10Mul;
}
   break;
     
    case "11":
      if(mathlevel == "mul"){
        return level11Mul;
      }
    break;
    case "12":
      if(mathlevel == "mul"){
        return level12Mul;
      }
      break;
    
    case "13":
     if(mathlevel == "mul"){
      return level13Mul;
     }
     break;
    case "14":
      if(mathlevel == "mul"){
        return level14Mul;
  
       }
       break;
    case "15":
      if(mathlevel == "mul"){
        return level15Mul;
       }
       break;
    default:
      return level16questions;
   }

}