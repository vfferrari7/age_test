const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;


mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
    if(age >= 100){
        resultElement.textContent = 'Voce é muito velho para entrar neste site'
    }
    else if(age == 0){
        resultElement.textContent = 'Voce nao pode entrar, acabou de nascer'
    }
    else if(age >= 18){
        resultElement.textContent = 'Voce tem idade o suficiente para entrar no site';
    }
    else if(age < 0){
        resultElement.textContent ='Sua idade nao pode ser abaixo de 0';
    }
    else{
        resultElement.textContent = 'Voce deve ter 18+ para entrar no site';
    }
}