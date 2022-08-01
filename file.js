//getElementById nos trae solo un elemento ID

const identificador = document.getElementById("item");
 
identificador.addEventListener("click", () =>{
    alert("hola");
});

document.write(identificador)

//geatElementByTagName nos trae todos los elementos de una etiqueta

let contenedores = document.getElementsByTagName("div");


contenedores[1].addEventListener("click", () =>{
    alert("way");
    contenedores[1].removeAttribute("style")
});

contenedores[2].addEventListener("click", () =>{
    alert("soy");
    contenedores[2].removeAttribute("style")
});


    document.write(contenedores);

    //querySelector nos trae a clases atributos etc seleccionados, pero solo uno

    let porClase = document.querySelector(".container3");

    porClase.addEventListener("click", () =>{
        alert("por_Clase");
        porClase.removeAttribute("style")
    });
    

    //queryselectorallnos trae a todo los elementos con la misma clase

    let cajas = document.querySelectorAll(".container");

    cajas[0].addEventListener("click", () =>{
        for(iterador in cajas){
            cajas[iterador].removeAttribute("style");
            
        }
        
    });

    cajas[2].removeAttribute("hidden");
