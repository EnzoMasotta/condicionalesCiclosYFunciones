const esPar = (n) => (n % 2 === 0 ? `${n} es par.` : `${n} es impar.`);
function esImpar(n){
    if(n % 2 !== 0) return `${n} es impar.`
    return `${n} es par.`
    
}

console.log(esImpar(5))

console.log(esPar(2));
console.log(esPar(10));


function mayorOIgual(a, b){
   if(a > b) return `${a} es mayor que ${b}.`
   else if(a < b) return `${b} es mayor que ${a}.`
   return `${a} y ${b} son iguales.`
}

console.log(mayorOIgual(5, 10))
console.log(mayorOIgual(10, 7))
console.log(mayorOIgual(7, 7))


const esMultiploDe5 = (n) => (n % 5 === 0 ? `${n} es multiplo de 5.` : `${n} no es multiplo de 5.`);

console.log(esMultiploDe5(35));
console.log(esMultiploDe5(7));


const imprimirNumerosHasta = (n) => {
    for (let i = 0; n >= 0 ? 
        i <= n : i >= n; n >= 0 ? 
        i++ : i--) 
        console.log(i);
  };

imprimirNumerosHasta(-10);
imprimirNumerosHasta(5);


function imprimirPalabra(palabra, numero) {
    if (numero <= 0) {
      console.log("La cantidad tiene que ser positiva.");
      return;
    }
    
    for (let i = 0; i < numero; i++) {
      console.log(palabra);
    }
  }
  
imprimirPalabra("Hola", 10);


const imprimirArray = (array) => array.forEach(valor => console.log(valor));

imprimirArray(["a", "b", "c", "d"])


const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const imprimirArraySinQuinto = () => {
  if (arrayDeNumeros.length !== 10) {
    console.log("El array tiene que contener exactamente 10 numeros.");
    return;
  }

  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (i !== 4) { 
      console.log(arrayDeNumeros[i]);
    }
  }
};

imprimirArraySinQuinto();


const imprimirMultiplicado = (multiplicador) => {
    const arrayDeNumeros = [1, 2, 3, 4, 5];
    
    for (let i = 0; i < arrayDeNumeros.length; i++) {
      console.log(arrayDeNumeros[i] * multiplicador);
    }
  };
  

imprimirMultiplicado(10);
