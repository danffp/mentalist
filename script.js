function chute(){
            
    var NumSec = Math.floor(Math.random() * 11);
    var txtn1 = document.getElementById('txtnum');
    var res = document.getElementById('answer');
    var num = Number(txtn1.value);

    
                
        if(num == NumSec){
    
            res.innerHTML = `<span>Você acertou!</span>`
        }
        else if(num > 10 || num < 0 || num == ""){
    
            res.innerHTML = `Digite um número entre 0 e 10.`
        }
        else
        {
            res.innerHTML = `Você errou o número é ${NumSec}`
        }
    }
