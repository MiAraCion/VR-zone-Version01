
/*ANIMACION HERRAMIENTAS PARA DISCAPACIDAD VISUAL*/
const vbtno = document.getElementById("visual-btn-o");
const vbtnc = document.getElementById("visual-btn-c");
const visual_tool = document.getElementById("v-t");

vbtno.addEventListener("click", ()=>{

    visual_tool.style.left = "0px";

});

vbtnc.addEventListener("click", ()=>{

    visual_tool.style.left = "-400px";
});
visual_tool.style.transitionProperty = "left";
visual_tool.style.transitionDuration ="2s";
visual_tool.style.transitionTimingFunction = "easy";

/*ANIMACION HERRAMIENTAS PARA DISCAPACIDAD VISUAL*/





/*ANIMACION DE TARJETAS*/



/*ANIMACION DE TARJETAS*/


/*SCRIPT PARA NARRAR TEXTO SELECCIONADO*/

let btn_hablar = document.getElementById('hablar');

btn_hablar.addEventListener("click", ()=>{
    let textoResaltado = window.getSelection().toString();//obtiene el texto resaltado
    decir(textoResaltado);
});

function decir(parrafo){
    speechSynthesis.speak(new SpeechSynthesisUtterance(parrafo));
}


/*SCRIPT PARA NARRAR TEXTO SELECCIONADO*/


/*Slider*/

let padre = document.querySelector(".slider-padre");
let boton = document.querySelector(".slider-boton1");
let boton2 = document.querySelector(".slider-boton2");
let indice = document.querySelectorAll('.slider-hijo'); /*La variable indice la utilizamos con la propiedad querySelectorAll para obtener todos los valores del Doom, que contengan la clase '.hijo' para acomodarla en una lista */
let valor = 0;
let Calc_Tamaño = (indice.length)*(-100);/*halla el tamaño de la lista que esta conformada por loe elementos del doom que contengan la clase '.hijo'*/


let Veri_Position = (condicion)=>{
    
    
    
    if(condicion == true){

        valor = Number(valor)-100;
        
        if(valor == Calc_Tamaño){
           
            valor = 0;
           
        }
    
    }
    else if(condition==false){

        valor = Number(valor)+100;

        if(valor == 100){

            valor = Calc_Tamaño+100;

        }
        
    }
    /*Aplicar estilos y animaciones*/
    padre.style.transform = "translateX("+(valor)+"%)";
    padre.style.transitionProperty = "transform";
    padre.style.transitionDuration = "2s";/*Duracion de la transicion*/
    padre.style.transitionTimingFunction ="easy";/*defina la aceleracion de la animacion*/

}


boton2.addEventListener("click", ()=>{/*Boton Derecho*/
    
    condition = true;
    Veri_Position(condition);
    
});


boton.addEventListener("click", ()=>{/*Boton Izquierdo*/    
    condition = false;
    Veri_Position(condition);

});

/*Slider*/