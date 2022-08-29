

const h1 = document.querySelector("h1");
const p = document.getElementById("parrafo");
const form = document.getElementById("formulario");
const input1 = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const resul = document.getElementById("result");
const btnCalcular = document.querySelector('#btnCalcular');


form.addEventListener('submit',btnClick);


/* 
h1.innerHTML = 'Patito <br> casa';
console.log(input.getAttribute('value'));


input.setAttribute('value','porque no');


 console.log(input.classList.contains('rojo')); 

const img = document.createElement("img");
 */
function btnClick(event){
    console.log(event);
    event.preventDefault();
    const suma  = parseInt(input1.value) + parseInt(input2.value);
    resul.innerText = "Resultado:" +suma;
}




