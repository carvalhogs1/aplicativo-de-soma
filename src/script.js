var calc = document.getElementById('Soma');
var num1 = document.getElementById('numero1');
var num2 = document.getElementById('numero2');
var result = document.getElementById('resultado');

function soma(event){

    event.preventDefault();

    var resusoma = parseInt(num1.value) + parseInt(num2.value);
    result.innerText = resusoma


    console.log(resusoma)

   
}

calc.addEventListener('submit', soma);


