

let contadorGlobalDeTurnos = 0;
const turnoMaximo = 25; 
let arreglo = [];

    while(arreglo.length < turnoMaximo+1){
      let numero = Math.floor(Math.random() * 50) + 1;
    
      if(arreglo.indexOf(numero) < 0){
        arreglo.push(numero);
      }
    }

    console.log(arreglo)

function generarNumeroDeBingo(){
    console.log(arreglo[contadorGlobalDeTurnos]);
    incrementarContadorGlobalDeTurnos()

}
   generarNumeroDeBingo();

function incrementarContadorGlobalDeTurnos() {
    contadorGlobalDeTurnos++;
    console.log(`turno: ${contadorGlobalDeTurnos}`);

    if (contadorGlobalDeTurnos >= turnoMaximo)
    console.log('El juego ha alcanzado el turno máximo, el juego fue terminado.');
    
}

    let pasarTurno = document.getElementById("pasarTurno")
    let pasarTurnoEL = document.getElementById("pasarTurnoEL")
    let numeroDelTurno = document.getElementById("numeroDelTurno")
    pasarTurno.onclick = function incrementarContadorGlobalDeTurnos() {
        contadorGlobalDeTurnos++;
        console.log(`turno: ${contadorGlobalDeTurnos}`);
    
        if (contadorGlobalDeTurnos >= turnoMaximo)
        console.log('El juego ha alcanzado el turno máximo, el juego fue terminado.');
        console.log(arreglo[contadorGlobalDeTurnos]);
    pasarTurnoEL.textContent = (`turno: ${contadorGlobalDeTurnos}`);
    numeroDelTurno.textContent = (arreglo[contadorGlobalDeTurnos]);
    }

    pasarTurnoEL.textContent = (`turno: ${contadorGlobalDeTurnos}`);
    numeroDelTurno.textContent = (`El Numero de este turno es: ${arreglo[contadorGlobalDeTurnos]}`);

function terminarJuego() {
  console.log('Un jugador ha conseguido el BINGO! el juego fue terminado.');
  contadorGlobalDeTurnos = 25;
}

function iniciarJuego3x3() {
    console.log('Se ha iniciado una partida, ha elegido el modo 3x3')
    contadorGlobalDeTurnos = 0; 
    generarMatrizAleatoria3x3();
}

function iniciarJuego4x4() {
    console.log('Se ha iniciado una partida, ha elegido el modo 4x4')
    contadorGlobalDeTurnos = 0; 
    generarMatrizAleatoria4x4();
}

function iniciarJuego5x5() {
    console.log('Se ha iniciado una partida, ha elegido el modo 5x5')
    contadorGlobalDeTurnos = 0; 
    generarMatrizAleatoria5x5();
}


function generarMatrizAleatoria3x3() {
    const matriz = [];
    for (let i = 0; i < 3; i++) {
      const fila = [];
      for (let j = 0; j < 3; j++) {
        const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
        fila.push(numeroAleatorio);
      }
      matriz.push(fila);
    }
    return matriz;
  }
  
  let matrizTable3x3 = document.getElementById("matrizTable3x3");
  let matriz1 = generarMatrizAleatoria3x3();
  let matriz2 = generarMatrizAleatoria3x3();
  let matriz3 = generarMatrizAleatoria3x3();
  let matriz4 = generarMatrizAleatoria3x3();

  for (let i = 0; i < matriz1.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz1[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz1[i][j];
      row.appendChild(cell);
    }
    matrizTable3x3.appendChild(row);
  }

  for (let i = 0; i < matriz2.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz2[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz2[i][j];
      row.appendChild(cell);
    }
    matrizTable3x3.appendChild(row);
  }

  for (let i = 0; i < matriz3.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz3[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz3[i][j];
      row.appendChild(cell);
   }
    matrizTable3x3.appendChild(row);
  }

  for (let i = 0; i < matriz4.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz4[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz4[i][j];
      row.appendChild(cell);
    }
    matrizTable3x3.appendChild(row);
  }

function generarMatrizAleatoria4x4() {
    const matriz = [];
    
    for (let i = 0; i < 4; i++) {
      const fila = [];
      
      for (let j = 0; j < 4; j++) {
        const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
        fila.push(numeroAleatorio);
      }
      
      matriz.push(fila);
    }
    
    return matriz;
  }

  let matrizTable4x4 = document.getElementById("matrizTable4x4");
  let matriz5 = generarMatrizAleatoria4x4();
  let matriz6 = generarMatrizAleatoria4x4();
  let matriz7 = generarMatrizAleatoria4x4();
  let matriz8 = generarMatrizAleatoria4x4();

  for (let i = 0; i < matriz5.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz5[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz5[i][j];
      row.appendChild(cell);
    }
    matrizTable4x4.appendChild(row);
  }

  for (let i = 0; i < matriz6.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz6[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz6[i][j];
      row.appendChild(cell);
    }
    matrizTable4x4.appendChild(row);
  }

  for (let i = 0; i < matriz7.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz7[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz7[i][j];
      row.appendChild(cell);
   }
    matrizTable4x4.appendChild(row);
  }

  for (let i = 0; i < matriz8.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz8[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz8[i][j];
      row.appendChild(cell);
    }
    matrizTable4x4.appendChild(row);
  }
  

function generarMatrizAleatoria5x5() {
    const matriz = [];
    
    for (let i = 0; i < 5; i++) {
      const fila = [];
      
      for (let j = 0; j < 5; j++) {
        const numeroAleatorio = Math.floor(Math.random() * 50) + 1;
        fila.push(numeroAleatorio);
      }
      
      matriz.push(fila);
    }
    
    return matriz;
  }
  
  let matrizTable5x5 = document.getElementById("matrizTable5x5");
  let matriz9 = generarMatrizAleatoria5x5();
  let matriz10 = generarMatrizAleatoria5x5();
  let matriz11 = generarMatrizAleatoria5x5();
  let matriz12 = generarMatrizAleatoria5x5();

  for (let i = 0; i < matriz9.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz9[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz9[i][j];
      row.appendChild(cell);
    }
    matrizTable5x5.appendChild(row);
  }

  for (let i = 0; i < matriz10.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz10[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz10[i][j];
      row.appendChild(cell);
    }
    matrizTable5x5.appendChild(row);
  }

  for (let i = 0; i < matriz11.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz11[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz11[i][j];
      row.appendChild(cell);
   }
    matrizTable5x5.appendChild(row);
  }

  for (let i = 0; i < matriz12.length; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < matriz12[i].length; j++) {
      let cell = document.createElement("td");
      cell.textContent = matriz12[i][j];
      row.appendChild(cell);
    }
    matrizTable5x5.appendChild(row);
  }


  const button1 = document.getElementById("show-hide1");
  let matrizTable3x3a = document.querySelector(".matrizTable3x3a");

button1.addEventListener("click", () => {
  if (matrizTable3x3a.style.display === "none") {
    matrizTable3x3a.style.display = "block";
    button1.innerHTML = "cerrar partida 3x3";
  } else {
    matrizTable3x3a.style.display = "none";
    button1.innerHTML = "abrir partida 3x3";
  }
});

const button2 = document.getElementById("show-hide2");
  let matrizTable4x4a = document.querySelector(".matrizTable4x4a");

button2.addEventListener("click", () => {
  if (matrizTable4x4a.style.display === "none") {
    matrizTable4x4a.style.display = "block";
    button2.innerHTML = "cerrar partida 4x4";
  } else {
    matrizTable4x4a.style.display = "none";
    button2.innerHTML = "abrir partida 4x4";
  }
});

const button3 = document.getElementById("show-hide3");
  let matrizTable5x5a = document.querySelector(".matrizTable5x5a");

button3.addEventListener("click", () => {
  if (matrizTable5x5a.style.display === "none") {
    matrizTable5x5a.style.display = "block";
    button3.innerHTML = "cerrar partida 5x5";
  } else {
    matrizTable5x5a.style.display = "none";
    button3.innerHTML = "abrir partida 5x5";
  }
});

function compararValores() {
    (arreglo[contadorGlobalDeTurnos]); 
    const matrizTable3x3b = document.getElementById("matrizTable3x3b");
    for (var i = 0; i < matrizTable3x3b.rows.length; i++) {
        console.log('oooo')
      for (var j = 0; j < matrizTable3x3b.rows[i].cells.length; j++) {
        console.log('ddddd')
        if (matrizTable3x3b.rows[i].cells[j].getAttribute("matrizTable3x3") == (arreglo[contadorGlobalDeTurnos])) {
            console.log('cccc')
            matrizTable3x3b.rows[i].cells[j].classList.add("highlight");
            console.log('bbbbbb')
        }
      }
    }
    console.log('aaaah')
  }