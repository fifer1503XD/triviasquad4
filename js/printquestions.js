
export let corr=[]


export function printCards(questions) {
    const container = document.getElementById('container-cards');
container.innerHTML = '';
questions.forEach((question,index) => {
    const card = returnCardHTML(question,index);
    container.innerHTML += card;
});
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
function returnAnswersHTML(correct, incorrects,ind) {
    
    incorrects.push(correct)
    
    for (var a=[],i=0;i<incorrects.length;++i) a[i]=i;


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
    
    
    
    return incorrectHTML;
}
