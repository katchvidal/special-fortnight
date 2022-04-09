import { Injectable } from "@angular/core"
import { IPersonaje } from "./interfaces/simpson.interfaces"


/**
 * Servicio pieza fundamental se puede encargar de mantener el estado global
 * de una pequeña parte de la aplicaicon este caso
 * Este servicio se encarga de Mantener la data de que personajes
 * se encuentran dentro del arreglo una especie de visualizador de que personajes
 * se encuentran guardados en memoria y poder espacrilos por los componentes
 */


@Injectable()
export class SimpsonServices {
    //  Podemos Tener Todas las propiedades ( Atributos ) en el servicio
    private _personajes : IPersonaje[] = [
        { 
            name : 'Ned',
            lastname : 'Flanders'
        },
        { 
            name : 'Abe',
            lastname : 'Simpson'
        },
    ];

    //  Meotodo para Retornar los Personajes
    get GetPersonajes(): IPersonaje[]{
        return [...this._personajes]
    }
    //  Metodo para Agregar Personajes
    addPersonaje( personaje : IPersonaje ){
        this._personajes.push( personaje )
    }
}