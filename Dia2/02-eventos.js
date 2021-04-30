let divContenido = document.getElementById("contenido");

let miBoton = document.createElement("button");

miBoton.innerHTML = "Dame Click";

divContenido.appendChild(miBoton);

// addEventListener ("evento",function(){})

miBoton.addEventListener("click", function () {
  alert("Haz dado CLICK!");
});

let cancionesParaBailar = [
  "Lose Yourself to Dance",
  "La Macarena",
  "Gangnam Style",
  "Motor y motivo",
  "Get Yourself",
  "Dance Monkey",
  "Tren al sur",
];

cancionesParaBailar.forEach(function (cancion) {
  let nuevoParrafo = document.createElement("p");
  nuevoParrafo.innerHTML = cancion;
  divContenido.appendChild(nuevoParrafo);
  // Vamos a agregar tambien aqui su addEvent Listener
  // Evento doble click
  nuevoParrafo.addEventListener("dblclick", function () {
    alert("Hiciste Click en una cancion");
  });
  nuevoParrafo.style.cursor = "pointer";
});

let input = document.createElement("input");
input.setAttribute("type", "password");
divContenido.appendChild(input);

let btnVer = document.createElement("button");
btnVer.innerText = "ver Password";
divContenido.appendChild(btnVer);

let esVisible = false;

btnVer.addEventListener("click", function () {
  // cambiar el booleano, cuando utilizo el signo ! niega el valor false.
  esVisible = !esVisible;
  if (esVisible === true) {
    input.setAttribute("type", "text");
  } else {
    input.setAttribute("type", "password");
  }

  alert(input.value);
});

//keyup -> evento cuando la tecla se levanta
input.addEventListener("keyup", function (evento) {
  //lo que reciba la función del addEventListener va a ser otro objeto, la tecla y demás info
  // target = al elemento que estoy capturando
  console.log(evento.target.value);
});

let goToGoogle = document.createElement("a");

goToGoogle.setAttribute("href", "http://google.com");
goToGoogle.innerText = "Ir a Google";
divContenido.appendChild(goToGoogle);

//previene la acción por defecto de un elemento,
//por ejemplo un hipervinculo
//o un form con un submit
goToGoogle.addEventListener("click", function (e) {
  e.preventDefault();
});
