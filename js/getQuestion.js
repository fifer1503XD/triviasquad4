import { printCards} from './printquestions.js'
import { typequestion} from './validarQuestion.js'
import { correctAnswer} from './validarQuestion.js'
export function getValuesQuestion(){
const questionsQuantity = document.getElementById('questions-number').value
const questionsCategory= document.getElementById('questions-category').value
const questionsDifficulty= document.getElementById('difficulty').value
const questionType= document.getElementById('type').value
getQuestions(questionsQuantity,questionsCategory,questionsDifficulty,questionType);
return questionsQuantity,questionsCategory,questionsDifficulty,questionType

}
function getQuestions(questionsQuantity, questionsCategory,questionsDifficulty,questionType) {
    fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${questionsCategory}&difficulty=${questionsDifficulty}&type=${questionType}`)    
    .then(response => response.json())
        .then(data => {typequestion(data.results),printCards(data.results),correctAnswer(data.results)})
     }
   
   
    
  
