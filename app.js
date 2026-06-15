console.log("Hola mundo");

//constantes y variables
const x= "Hola";
let y= 0;
console.log(x);
console.log(y);

y=1;
const z = y*x;

console.log(x);
console.log(y);
console.log(z);

//objetos
const persona ={
    nombre : "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es "+this.nombre);
    },
    apellidos: null
}
persona.nombre = "Pedro";
console.log(persona);
console.log(persona.nombre);
console.log(persona.apellidos);
console.log(persona.altura);

const boleto ={
    folio: "910101",
    precio: 100,
    ganador: true
}

const boleto2={
    folio: "910102",
    precio: 100
}

if (boleto2.ganador){
    console.log("Eres el ganador");
}else{
    console.log("Lo siento no eres ganador");
}

//Arrays
const numeros =[
    1,2,3,4,5
];
console.log(numeros);

const NumerosMultiplicados = numeros.map(
    (numX) =>{
        console.log(numX);
        return numX * 2;
    }
)

console.log(NumerosMultiplicados);