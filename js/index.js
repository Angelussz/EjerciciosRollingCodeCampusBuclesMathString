/* 
Ejercicios Bucles
----------------------------------
*/
// Validar numero
const NoEsNumero = (numero) => {
  return isNaN(numero);
};
// Ejercicio 1
const ComprobarEdad = (edad) => {
  if (edad.includes(".") || isNaN(edad)) {
    window.alert("No es edad valida,por favor ingrese una edad valida");
  } else {
    edad = parseInt(edad);
    if (edad > 18) {
      window.alert("Ya puede conducir");
    } else {
      window.alert("Aun no puede conducir");
    }
    // console.log(edad)
  }
};

// Ejercicio 2

const solicitarNota = (nota) => {
  if (NoEsNumero(nota)) {
    window.alert("Ingrese número valido");
  } else {
    nota = Math.round(parseFloat(nota));
    // console.log(nota)
    if (nota >= 0 && nota <= 2) {
      window.alert("Muy deficiente");
      return;
    }
    if (nota >= 3 && nota <= 4) {
      window.alert("Insuficiente");
      return;
    }
    if (nota >= 5 && nota <= 6) {
      window.alert("Suficiente");
      return;
    }
    if (nota === 7) {
      window.alert("Bien");
      return;
    }
    if (nota >= 8 && nota <= 9) {
      window.alert("Notable");
      return;
    }
    if (nota === 10) {
      window.alert("Sobresaliente");
      return;
    } else {
      window.alert("Ingrese nota valida");
    }
  }
};

// Ejercicio 3
const pedirTexto = () => {
  let cadenaTexto = "";
  while (confirm("Ingrese Texto")) {
    let textoIngresar = prompt("Ingrese Texto");
    if (textoIngresar) {
      cadenaTexto += textoIngresar + "-";
    }
  }
  cadenaTexto = cadenaTexto.slice(0, -1);
  console.log(cadenaTexto);
};

// Ejercicio 4
const pedirNumero = () => {
  let numeros = 0;
  while (confirm("Programa Ingrese Numeros")) {
    let numeroIngresar = parseFloat(prompt("Escriba número a ingresar"));
    if (NoEsNumero(numeroIngresar)) {
      alert("Ingrese solo numero");
    } else {
      numeros += numeroIngresar;
    }
  }
  console.log("Resultado suma: ", numeros);
};

// Ejercicio 5
const calcularDNI = () => {
  const letrasValidas = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  let ingeseNumero = prompt("Ingrese número para calcular letra DNI");

  if (
    ingeseNumero.includes(".") ||
    isNaN(parseInt(ingeseNumero)) ||
    parseInt(ingeseNumero) < 0 ||
    parseInt(ingeseNumero) > 99999999
  ) {
    window.alert("Por favor ingrese un número válido");
  } else {
    console.log(letrasValidas[ingeseNumero % 23]);
  }
};

// Ejercicio 6
const piramideNormal = () => {
  for (let i = 1; i < 31; i++) {
    let piramide = "";
    for (let j = 0; j < i; j++) {
      piramide += i.toString();
    }
    console.log(piramide);
  }
};

// Ejercicio 7
const piramideInversa = () => {
  for (let i = 30; i > 0; i--) {
    let piramide = "";
    for (let j = i; j > 0; j--) {
      piramide += i.toString();
    //   console.log(i);
    }
    console.log(piramide);
    // console.log(i);
  }
};

// Ejercicio 8
const piramideUsuario = () =>{
    let tamanioPiramide = parseInt(prompt("Ingrese tamaño de pramide no mayor a 50"));
    if(NoEsNumero(tamanioPiramide) || parseInt(tamanioPiramide)>50){
        console.log("Ingrese un número o un valor valido")
        return
    }
    for (let i = 1; i < tamanioPiramide+1; i++) {
        let piramide = "";
        for (let j = 0; j < i; j++) {
          piramide += i.toString();
        }
        console.log(piramide);
      }
}

// Ejercicio 9
const numerosAl500 = ()=>{
    for(let i=1 ; i<=500;i++){
        let multiplo = `${i}`;
        if(i%4===0){
            multiplo += "(multiplo de 4)";
        }
        if(i%9===0){
            multiplo+= "(multiplo de 9)";
        }
        if(i%5===0){
            console.log(multiplo);
            console.log("----------------------");
            continue
        }
        console.log(multiplo);
    }
}

// Ejercicio 10
const TablaPorFilasYColumnas = ()=>{
    let fila = parseInt(prompt("Ingrese fila"));
    let columna = parseInt(prompt("Ingrese columna"));
    let tabla = [];
    if(NoEsNumero(fila) || NoEsNumero(columna)){
        console.log("Ingrese un número o un valor valido")
        return
    }
    else{
        let result = fila*columna;
        for(let i=result;i>0;i--){
            tabla.push(i);
        }
    }
    console.log(tabla)
}

/* 
Ejercicios con Math
-----------------------------------------
*/

// Ejercicio 11
const nombresyEdades = (cantidad=3)=>{
    const usuarios = [];
    const edades = [];
    do {
        let nombre = prompt("Ingrese un nombre");
        usuarios.push(nombre);
        let edad = prompt("Ingrese edad");
        while (NoEsNumero(parseInt(edad)) || parseInt(edad) < 0) {
            edad = prompt("Ingrese edad");
        }
        edades.push(parseInt(edad));
        // console.log(usuarios);
        cantidad--;

    } while (cantidad>0);

    let mayor = Math.max(...edades);
    usuarios.forEach((usuario,index)=>{
        if(edades[index] === mayor){
            console.log(usuario)
        }
    })
}

// Ejercicios 12
const aleatorio = (numero)=>{
    console.log(Math.random() * numero);
}
// let edad = prompt("Ingrese la edad para saber si puede conducir");
// ComprobarEdad(edad)
// let nota = prompt("Ingrese la nota obtenida");
// solicitarNota(nota)
// pedirTexto();
// pedirNumero();
// calcularDNI();
// piramideNormal();
// piramideInversa();
// piramideUsuario();
// numerosAl500();
// TablaPorFilasYColumnas();
// nombresyEdades();
// aleatorio(244);