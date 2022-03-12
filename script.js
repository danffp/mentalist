// 
var NumSec = parseInt(Math.random() * 11);
var attempts = 2;

    function chute(){
            
    var num = document.getElementById('txtnum').value;
    var answer = document.getElementById('answer');
     
        if(num == ""){
    
            answer.innerHTML = `Digite um número`
        }
        else if(num == NumSec){

            answer.innerHTML = `Você acertou!`
        }
        else if(num > 10 || num < 0){
    
            answer.innerHTML = `Digite um número de 0 e 10.`
        }
        else if(num != NumSec && attempts > 0)
        {
            answer.innerHTML = `Você errou! <br> <span>O número e menor ${NumSec + 1} e maior ${NumSec - 1} <span>
            <br> <span>Tentativas restantes:<span> ${attempts}`
            attempts -= 1; 
        }
        else{
            answer.innerHTML = 'Você perdeu!<br><br> <button> <a href="../index.html">Jogar novamente</a></button>'
        }
    }