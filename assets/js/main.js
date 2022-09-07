const numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function chutar(){
    const input = document.querySelector(".valor");
    const chuteInput = document.querySelector(".valor").value;
    const resultado = document.querySelector(".resultado");
    const button = document.querySelector(".button");
    const numeros = document.querySelector(".numeros");
    const numerosChutados = [];

    if(chuteInput == ""){
        resultado.style.color = "orange";
        resultado.innerHTML = "Digite um número de 0 a 10";
    }
    else{        
        const chute = parseInt(chuteInput); 


        if(tentativas > 0 && tentativas <= 3){
            if(chute < 0 || chute > 10){
                resultado.style.color = "orange";
                resultado.innerHTML = "Digite um número de 0 a 10";
            }
            else{
                numerosChutados.push(chute);
                console.log(numerosChutados.length);

                if(chute === numeroSecreto){
                    resultado.style.color = "green";
                    resultado.innerHTML = "Acertou<br>O número secreto é " + numeroSecreto;
                    button.disabled = true;
                    input.disabled = true;
                    input.style.color = "white";
                }
                else{
                    tentativas--;
                    resultado.style.color = "red"
                    resultado.innerHTML = "Errou<br>Restam " + tentativas + " tentativas";

                    if(tentativas == 0){
                        resultado.style.color = "red"
                        resultado.innerHTML = "Você errou<br>O número secreto era "+ numeroSecreto;
                        button.disabled = true;
                    }
                }
                numeros.style.display = "block";
                numeros.innerHTML += "<p class='numarea'>" + numerosChutados[numerosChutados.length - 1] + "</p>"
            }
        }
    }
}