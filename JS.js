
let button = document.querySelector("#btn")

button.addEventListener("click",function sum(){
    let nome = document.querySelector("#name").value
    let altura = document.querySelector("#height").value
    let peso = document.querySelector("#Weight").value
    
    const resultado =  document.querySelector("#result")

    const total = (peso / (altura * altura)).toFixed(1)
    if (nome !== '' && altura !== '' && peso !== '' ){
        
        let classificacao = '';

        if (total < 18.5){
            classificacao = 'abaixo do peso.';
        }else if (total < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }else if (total < 30){
            classificacao = 'levemente acima do peso.';
        }else if (total < 35){
            classificacao = 'com obesidade grau I.';
        }else if (total < 40){
            classificacao = 'com obesidade grau II';
        }else {
            classificacao = 'com obesidade grau III. Cuidado!!';
        }
        resultado.textContent = `${nome} seu IMC é ${total} e você está ${classificacao}`;
    }
    else {
        resultado.textContent = `Preencha todos os campos!!!`
    }
    

}

)

