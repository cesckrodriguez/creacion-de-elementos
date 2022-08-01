let contenedor = document.querySelector(".container");

contenedor.style.background = "blue";
contenedor.style.width = "50vw";
contenedor.style.height = "100vh";

//creamos un texto para el inicio de nuestra lista

let textoLista = document.createTextNode("Esta es una lista");

//integramos el texto a la lista

contenedor.appendChild(textoLista);

//creamos un objeto en este caso sera una lista, debemos utilizar mayusculas para describir las etiquetas

let lista = document.createElement("UL");

lista.classList.add("tipo");

//agregamos la lista al contenedor vacio en HTML

contenedor.appendChild(lista);

//creamos contenido para la lista

let opcion1 = document.createElement("LI");
let textoLista1 = document.createTextNode("Esta es el primer elemento");
opcion1.appendChild(textoLista1);

let opcion2 = document.createElement("LI");
let textoLista2 = document.createTextNode("Esta es el segundo elemento");
opcion2.appendChild(textoLista2);

let opcion3 = document.createElement("LI");
let textoLista3 = document.createTextNode("Esta es el tercer elemento");
opcion3.appendChild(textoLista3);

lista.appendChild(opcion1);
lista.appendChild(opcion2);
lista.appendChild(opcion3);




