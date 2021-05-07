//400gr de carne por pessoa + de 6h 600gr
//cerveja - 1200ml por pessoa + de 6h 2000ml
//Refri e agua - 1000ml + de 6h 1500ml

// criança vale por 0.5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular () {
    let adultos = parseInt(inputAdultos.value);
    let criancas = parseInt(inputCriancas.value);
 
    if(inputDuracao.value >= 6){
        resultado.innerHTML = ` <p>Carne = ${((adultos + (criancas/ 2)) * 600) / 1000}Kg </p> 
                                <p>Cerveja = ${Math.ceil((adultos  * 2000 ) / 495)} Latões </p>                       
                                <p>Refrigerante e agua = ${Math.ceil(((adultos + (criancas/ 2)) * 1500) / 2000)} Garrafas</p>  `
    }else {
        resultado.innerHTML = ` <p>Carne = ${((adultos + (criancas/ 2)) * 400) / 1000}Kg </p> 
                                <p>Cerveja = ${Math.ceil((adultos  * 1200 ) / 495)} Latões </p>                       
                                <p>Refrigerante e agua = ${Math.ceil(((adultos + (criancas/ 2)) * 1000) / 2000)} Garrafas</p>  `
    }
}