import { models } from "../models.js"

export class ModeloPieza{

    constructor(numero){
        this.modelo = numero
        this.angulo = 0
        this.matriz = models[this.modelo].matriz[this.angulo]
        this.x = 0
        this.y = 0
        this.longitud = this.matriz[0].length
        this.altura = this.matriz.length


    }

    //Definimos el metodo girar
    girar = ()=>{
        if(this.angulo==4){
            this.angulo = 0
        }else{
            this.angulo++ 
    }
    this.matriz = models[this.modelo].matriz[this.angulo]
    this.longitud = this.matriz[0].length
    this.altura = this.matriz.length
    console.log(this.matriz)
}
}