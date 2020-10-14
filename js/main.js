
    let qtype;
    function getValuesQuestion(){
    const questionsQuantity = document.getElementById('questions-number').value
    const questionsCategory= document.getElementById('questions-category').value
    const questionsDifficulty= document.getElementById('difficulty').value
    const questionType= document.getElementById('type').value
    getQuestions(questionsQuantity,questionsCategory,questionsDifficulty,questionType);
    qtype=questionType;
    return questionsQuantity,questionsCategory,questionsDifficulty,questionType
}
   function getQuestions(questionsQuantity, questionsCategory,questionsDifficulty,questionType) {
    fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${questionsCategory}&difficulty=${questionsDifficulty}&type=${questionType}`)    
    .then(response => response.json())
        .then(data => printCards(data.results))
     }
   
    let identificador=0;
   function printCards(questions) {
     
    const container = document.getElementById('container-cards');
    container.innerHTML = '';
    questions.forEach((question,index) => {
        const card = returnCardHTML(question,index);
        container.innerHTML += card;
    });
    // poner las preguntas en mi pÃ¡gina web
}

function returnCardHTML(q,index) {
    const card = `<div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${q.category}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                        ${returnAnswersHTML(randomize(q.correct_answer, q.incorrect_answers),index)}           
                    </div>
                </div>`
    return card
}
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function randomize(correct,incorrect)
{
    let arrpre=[];
    var inco=0;
    var ran = Math.floor(Math.random()*3)+0;
    
    
    var largo=0;
    while (incorrect[largo]!=undefined) {
        largo ++;
      
    }
    var ran = random(0,largo);
    if((qtype !='boolean'))
       {  
    for (var i=0;i<largo;i++)
        {
            
            if(i==ran)
            {
                arrpre.push(correct);
                
            }
            else
            { 
                arrpre.push(incorrect[inco]);
               
                inco=inco+1;

            }
        }
        
        }
 if((qtype =='boolean'))
        {  
            
     for (var i=0;i<largo;i++)
         {
            
            if(correct==='True')
             {
                 arrpre.push(correct);
                 arrpre.push(incorrect);
            
             }
             if(correct==='False')
               {
                arrpre.push(incorrect);
                arrpre.push(correct);
            
               }
             
 
             }
         
     
 }   

return arrpre;
}

function returnAnswersHTML(arr, incorrects,ind) {
    
    let incorrectHTML = '';
    arr.forEach((arr,index) => {
        incorrectHTML += `  <div>
                            <div class="form-check">
                            <input class="form-check-input" type="radio" name="answer-${ind}" id="answer-${index}${ind}" value="${index}${ind}">
                            <label class="form-check-label" for="answer-${index}${ind}">
                            ${arr}
                            </label>
                        </div>
                        </div>`;
                       
                      
    })
    


    return incorrectHTML;
}
getValuesQuestion()
import { getCategories} from './getCategorias.js'
getValuesQuestion()    
getCategories()

window.getValuesQuestion = getValuesQuestion