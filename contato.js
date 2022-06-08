const form = document.getElementById('form')
const email = document.getElementById('email')
const celular = document.getElementById('celular')
const assunto = document.getElementById('assunto')

form.addEventListener('submit',(e)=> {
    e.preventDefault()

    checkInputs()
})

function checkInputs(){

    const emailValue = email.value.trim()
    const celularValue = celular.value.trim()
    const assuntoValue = assunto.value.trim()


    if(emailValue === ''){
        //mostrar o erro
        //adicionar a classe error
        errorValidation(email, 'Preencha esse campo')
    } else if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        errorValidation(email, 'Insira um e-mail válido')
    } else {
        //adicionar a classe success
        successValidation(email)
    }

    if(celularValue === ''){
        errorValidation(celular, 'Preencha esse campo')
    } else if (celularValue > 1){
        errorValidation(celular, 'Insira um celular válido')
    } else {
        successValidation(celular)
    }

    if(assuntoValue === ''){
        errorValidation(assunto, 'Preencha esse campo')
    } else{
        successValidation(assunto)
    }
}

function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function successValidation(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}



/*
var email = document.getElementById('email');
var celular = document.getElementById('celular');
var assunto = document.getElementById('assunto');


            email.addEventListener('focus',()=>{ // ao clicar para digitar e-mail muda a cor da borda
                email.style.borderColor = "#494949";
            });
            email.addEventListener('blur',()=>{ // ao clicar fora da caixa de e-mail tira a cor da borda inserida
               email.style.borderColor = "#ccc";
           });
            


            celular.addEventListener('focus',()=>{
                celular.style.borderColor= "#494949";
            });
            celular.addEventListener('blur',()=>{
                celular.style.borderColor= "#ccc";
            });



            assunto.addEventListener('focus',()=>{
                assunto.style.borderColor= "#494949";
            });
            assunto.addEventListener('blur',()=>{
                assunto.style.borderColor= "#ccc";
            });

/* registro dos valores inseridos */
/*
const log = document.querySelector("#enviar");
            log.addEventListener("click", function(e) {

                e.preventDefault();// para o envio do formulário
            const logemail = document.querySelector("#email");
            const logvalue = logemail.value; // criando variável VALUE para acessar o .VALUE da variável EMAIL
            console.log(`E-mail:${logvalue}`); // usando template string

            const logcelular = document.querySelector("#celular");
            console.log("Celular:" + logcelular.value); // acessando o .value da variável CELULAR sem criar outra variável

            const logassunto = document.querySelector("#assunto");
            console.log("Assunto:" + logassunto.value);

            });

*/

/* Máscara para a escrita de alguns campos */

const masks = {
    celular (value){
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/,'($1)9')
            .replace(/(\d{5})(\d)/,'$1-$2')
            .replace(/(-\d{4})\d+?$/,'$1')
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks [field](e.target.value)
    }, false)
})



    function showModal(){
        var element = document.getElementById("modal");
        element.classList.add("show-modal");
    }

    function hideModal(){
        var element = document.getElementById("modal");
        element.classList.remove("show-modal")
    }

