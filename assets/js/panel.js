import { ModeloPieza } from "./clases/ModeloPieza.js"


export const panel = {
    matriz:[
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,0,0,0,0,0,0,0,0,0,0,1],
        [1,1,1,1,1,1,1,1,1,1,1,1],
    ],

    nuevaPieza: "",

    pintaPanel: ()=>{
        
        var html=``
        for(let y=1;y<panel.matriz.length -1;y++){
            html+=`<div class="p-fila">`
            for(let x=1; x<panel.matriz[y].length -1;x++){
                if(panel.matriz[y][x]===1){
                    html+=`<div class="celda bg-primary"> ${panel.matriz[y][x]} </div>`                 
                }else{
                    html+=`<div class="celda"> ${panel.matriz[y][x]} </div>`
                }
            }
            html+=`</div>`
        }

        document.querySelector('#panel').innerHTML= html
    },
    crearNuevaPieza: ()=>{

        panel.nuevaPieza = new ModeloPieza(0)

        let xAleatorio = Math.ceil(Math.random()*(10-panel.nuevaPieza.longitud))

        panel.nuevaPieza.x = xAleatorio
    },

    insertarPieza: ()=>{

        let posicion = panel.nuevaPieza.x

        let altura = panel.nuevaPieza.y + 1 

        for(let y=1;y<=panel.nuevaPieza.altura;y++,altura++){
            for(let x=1;x<=panel.nuevaPieza.longitud;x++,posicion++){
                console.log(panel.matriz[altura])
                panel.matriz[altura][posicion] = 1
            }

            posicion = panel.nuevaPieza.x
        }
        
    },

    controlTeclas: ()=>{
//Con el addEventListener hacemos que mande una señal cada vez que presionemos una tecla 
        document.addEventListener("keydown",function(event){
//Con el if hacemos que si pulsa la requerida mandara un evento que llamara la funcion moverDra
            if(event.key == "ArrowRight"){
                panel.moverDra()
            }
//Con el if hacemos que si pulsa la requerida mandara un evento que llamara la funcion moverIzq
                else if(event.key == "ArrowLeft"){
                panel.moverIzq()
            }
//Con el if hacemos que si pulsa la requerida mandara un evento que llamara la funcion girar
            else if(event.key == "ArrowUp"){
                panel.girar()
            }
//Con el if hacemos que si pulsa la requerida mandara un evento que llamara la funcion bajar
                else if(event.key == "ArrowDown"){
                panel.bajar()
            }
        })
    },

    borrarPieza: ()=>{
        let posicion = panel.nuevaPieza.x

        let altura = panel.nuevaPieza.y + 1

        for(let y=1;y<=panel.nuevaPieza.altura;y++,altura++){
            for(let x=1;x<=panel.nuevaPieza.longitud;x++,posicion++){
                console.log(panel.matriz[altura])
                panel.matriz[altura][posicion] = 0
            }

            posicion = panel.nuevaPieza.x
        }
    },

    moverDra: ()=>{
        var puedoMover = true

        panel.nuevaPieza.matriz.forEach((fila, y) => {
          let casillaSolida = false
          let x = panel.nuevaPieza.longitud - 1
          while (casillaSolida == false && x >= 0) {
            if (fila[x] > 0) {
              casillaSolida = true
            }
            x--;
          }
          x++;
          if (panel.matriz[panel.nuevaPieza.y + y][panel.nuevaPieza.x + x + 1] > 0) {
            puedoMover = false
          }
        });

        if(puedoMover == true){
            panel.borrarPieza()
            panel.nuevaPieza.x++
            panel.insertarPieza()
            panel.pintaPanel()
        }
    },

    moverIzq: ()=>{
        var puedoMover = true

        panel.nuevaPieza.matriz.forEach((fila, y) => {
            let casillaSolida = false
            let x = 0;
            while (!casillaSolida && x < fila.length) {
              if (fila[x] > 0) {
                casillaSolida = true
              }
              x++;
            }
            x--;
            if (panel.matriz[panel.nuevaPieza.y + y][panel.nuevaPieza.x + x - 1] > 0) {
              puedoMover = false
            }
          });

        if(puedoMover == true){
            panel.borrarPieza()
            panel.nuevaPieza.x--
            panel.insertarPieza()
            panel.pintaPanel()
        }
    },

    bajar: ()=>{
        panel.borrarPieza()

        if(panel.matriz[panel.nuevaPieza.y+panel.nuevaPieza.altura + 1][panel.nuevaPieza.x]==0){

            panel.nuevaPieza.y++

        }else{

        }

        panel.insertarPieza()

        panel.pintaPanel()   
    },

    girar: ()=>{

        panel.borrarPieza()
        panel.nuevaPieza.girar()
        panel.insertarPieza()
        panel.pintaPanel()

    },

    iniciarMovimiento: ()=>{
//Ponemos un setInterval que tiene la funcion de temporizador que cada segundo llama a la funcion bajar
        setInterval(function(){
            panel.bajar()
        },1250);
    }

  

    




}