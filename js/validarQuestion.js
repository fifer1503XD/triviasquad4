
let arrayTypeQuestion
let corr
export function typequestion(questions){
    arrayTypeQuestion=[]
    questions.forEach((question)=>{
    arrayTypeQuestion.push(question.type) 
           
    })
}
export function correctAnswer(questions){
    corr=[]
    questions.forEach((question)=>{
    corr.push(question.correct_answer) 
       
    })
}

export function validarRespuesta() {
    
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
    alert(resultado)
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