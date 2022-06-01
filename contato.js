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

const log = document.querySelector("#enviar");
            log.addEventListener("click", function(e) {

                e.preventDefault();// para o envio do formulário
            const email = document.querySelector("#email");
            const value = email.value; // criando variável VALUE para acessar o .VALUE da variável EMAIL
            console.log(`E-mail:${email.value}`); // usando template string

            const celular = document.querySelector("#celular");
            console.log("Celular:" + celular.value); // acessando o .value da variável CELULAR sem criar outra variável

            const assunto = document.querySelector("#assunto");
            console.log("Assunto:" + assunto.value);

            });



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