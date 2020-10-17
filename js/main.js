let corr=[]
let arrayTypeQuestion=[]
    function getValuesQuestion(){
        corr=[]
    const questionsQuantity = document.getElementById('questions-number').value
    const questionsCategory= document.getElementById('questions-category').value
    const questionsDifficulty= document.getElementById('difficulty').value
    const questionType= document.getElementById('type').value
    console.log(questionsQuantity+questionsCategory,questionsDifficulty,questionType)
    getQuestions(questionsQuantity,questionsCategory,questionsDifficulty,questionType);
    cuenta()
    return questionsQuantity,questionsCategory,questionsDifficulty,questionType
    
}
   function getQuestions(questionsQuantity, questionsCategory,questionsDifficulty,questionType) {
    fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${questionsCategory}&difficulty=${questionsDifficulty}&type=${questionType}`)    
    .then(response => response.json())
        .then(data => {typequestion(data.results),printCards(data.results)})
     }
     function typequestion(questions){
        arrayTypeQuestion=[]
        questions.forEach((question,ind)=>{
        arrayTypeQuestion.push(question.type)
            
                
        })
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
                        ${returnAnswersHTML(q.correct_answer, q.incorrect_answers,index)}           
                    </div>
                </div>`
    return card
}


function returnAnswersHTML(correct, incorrects,ind) {
    corr.push(correct)
    incorrects.push(correct)
    
    for (var a=[],i=0;i<incorrects.length;++i) a[i]=i;
function shuffle(array) {
  let tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

a = shuffle(a);

let cont=0;
let respuestas=[]
printRespuestas(a,incorrects,cont)
function printRespuestas(a,arr,index){   
a.forEach(element => {
    console.log(arr)
    let c=a[index];
    respuestas.push(arr[c])  
    index++
    });
    console.log(respuestas)
}
    
    let incorrectHTML = '';
    respuestas.forEach((incorrect,index) => {
        incorrectHTML += `  <div>
                            <div class="form-check" id"form${ind}">
                            <input class="form-check-input" type="radio" name="checkbox${ind}" id="answer-${index}${ind}" value="${incorrect}"required>
                            <label class="form-check-label" for="answer-${index}${ind}">
                            ${incorrect}
                            </label>
                        </div>
                        </div>`;
                       
                      
    })
    
    
    console.log(corr)
    return incorrectHTML;
}
function validarRespuesta() {

    let respchecked = false
    let respvalue = 0
    let sumaresult = 0
    let resultado = []
    let tresults = document.getElementById('t-resultados');
    let cant= document.getElementById('questions-number').value;
    console.log("cantidad  "+cant);
    let answ;



    for (let s = 0; s < cant; s++) {
        var k=0;
        if (arrayTypeQuestion[s]==='boolean')
        { 
            console.log("es de tipo boolean");
            while(k<2)
            {
            answ = document.getElementById(`answer-${k}${s}`);
            console.log(" valor del select en un boolean  "+ answ.checked);
            if(answ.checked==true)
            {
             resultado.push(answ.value);
            }

            k=k+1;
            }

        }
        else
                {

         while(k<4)
            {
             answ = document.getElementById(`answer-${k}${s}`);
             console.log(" valor del select en un boolean  "+ answ.checked);
             if(answ.checked==true)
             {
              resultado.push(answ.value);
             }

             k=k+1;
            }
                }
    }
        console.log("array de resultados   " +resultado);
        for( var j=0; j<resultado.length;j++)
                { 

                    if(corr[j]==resultado[j])
                       {
                           console.log("entro "+j);
                           sumaresult=sumaresult+1;
                        }

                } 



         console.log("el resultado es   "+sumaresult);


    tresults.innerHTML = `
    <h3>Estos son los resultados:</h3><br>
          <h3>Tiene ${sumaresult} respuestas correctas</h3><br>
          <h3>Tiene ${cant - sumaresult} respuestas incorrectas</h3><br>`}
     


getCategories()
function cargar()
{
    corr=new Array;
    getValuesQuestion()

}


import { getCategories} from './getCategorias.js'
window.cargar=cargar;
window.getValuesQuestion = getValuesQuestion;
window.validarRespuesta = validarRespuesta;

window.getValuesQuestion = getValuesQuestion


//<![CDATA[
 

 
