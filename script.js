
let intentos = 6;
let lista  = ["MOUSE", "HOUSE", "HORSE", "FUNNY"]
let palabra = lista[Math.floor(Math.random()* lista.length)]

console.log("RANDOM", Math.floor(Math.random()* lista.length))

console.log (palabra)
console.log("ADIVINAR", palabra)

const UrlApi = 'https://random-word-api.herokuapp.com/word?lang=en&length=5';

fetch (UrlApi).then (response => response.json())
    .then(response=>{
        palabra = response[0].toUpperCase()
        console.log("API", palabra);
    })
.catch(err => { console.log("mensaje de error")}
)
let button = document.getElementById('guess-button');

button.addEventListener('click', intentar)

function intentar(){
    const GRID = document.getElementById('grid')
    const ROW = document.createElement('div')
    ROW.className = 'row'
    const INTENTO = leerIntento ();
    console.log (INTENTO)
    if (INTENTO.length != 5) {
        alert("Debe ingresar una palabra de 5 letras");
        return;
    }
    
    if (INTENTO===palabra){
        console.log("ganaste")
        terminar("Ganaste")
        button.disabled = true;
        reiniciarBtn.disabled = true;
    }
    for (let i in palabra){
        const SPAM = document.createElement('spam')
        SPAM.className = "letter"
        if(palabra[i]===INTENTO[i]){
            console.log(INTENTO[i], "verde")
            SPAM.innerHTML = INTENTO[i];
            SPAM.style.background = "green"
        }else if (palabra.includes(INTENTO[i])){
            console.log(INTENTO[i], "amarilo")
            SPAM.innerHTML = INTENTO[i];
            SPAM.style.background = "yellow"
        }else{
            console.log(INTENTO[i], "gris")
            SPAM.innerHTML = INTENTO[i];
            SPAM.style.background = "gray"
        }
        ROW.appendChild(SPAM)
    }
    GRID.appendChild(ROW)

    intentos--
    if (intentos===0){
        console.log("Perdiste");
        terminar("Perdiste");
        button.disabled = true;
        reiniciarBtn.disabled = true;
    }
}

function leerIntento(){
    let valor = document.getElementById('guess-input').value
    valor = valor.toUpperCase()
    return valor
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input");
    INPUT.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}

let reiniciarBtn = document.getElementById('reiniciar-btn');

reiniciarBtn.addEventListener("click", reiniciarJuego);

function reiniciarJuego() {
    intentos = 6;
    palabra = '';

    const grid = document.getElementById("grid");
    grid.innerHTML = '';
 
    input.disabled = true;
    let contenedor = document.getElementById('mensaje');
    contenedor.innerHTML = '';
    button.disabled = true;
    reiniciarBtn.disabled = true;
}