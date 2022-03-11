var tentativas = 4;
var pontos = 0;
function chute(){
            
    var NumSec = Math.floor(Math.random() * 6);
    var txtn1 = document.getElementById('txtnum');
    var res = document.getElementById('answer');
    var points = document.getElementById('points');
    var num = Number(txtn1.value);
    
    // exibir pontos na tela
     points.innerHTML = `${pontos}` 
     
        if(num == ""){
    
            res.innerHTML = `Digite um número`
        }
        else if(num == NumSec){

            res.innerHTML = `Você acertou!`
            
            // add points and reset attempts
            if(num == NumSec){

                pontos += 1;
            }
            tentativas = 2;
        }
        else if(num > 10 || num < 0){
    
            res.innerHTML = `Digite um número de 0 e 10.`
        }
        else if(num != NumSec && tentativas > 0)
        {
            res.innerHTML = `Você errou! <br> <span>Tentativas restantes:<span> ${tentativas}`

            // remove points and attempts
            if(pontos > 0){
                pontos -= 1;
            }
            tentativas -= 1;
           
        }
        else{
            res.innerHTML = 'Você perdeu!<br><br> <button> <a href="../index.html">Jogar novamente</a></button>'
        }
    }