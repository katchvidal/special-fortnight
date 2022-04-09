import { Component, Input } from '@angular/core';
import { IPersonaje } from '../interfaces/simpson.interfaces';
import { SimpsonServices } from '../simpson.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  /**
   * Personajes este componente se encarga de visualizar la lista de 
   * Personajes dentro de la aplicacion; como el servicio se encarga
   * de tener de manera global el estado podemos hacerle una llamada
   * para poder obtener los datos que el guada.
   */

  //  Metodo que retorna los perosnajes del servicio importante
  //  Tipado de la variable.
  get personajes() : IPersonaje[] {
    return this.simpsonServices.GetPersonajes
  }


  //  Llamada al servicio
  constructor( private simpsonServices : SimpsonServices){}

}
