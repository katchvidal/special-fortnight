import { Component } from '@angular/core';
import { IPersonaje } from '../interfaces/simpson.interfaces';
import { SimpsonServices } from '../simpson.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})
export class AgregarComponent  {

  //  Propiedad como debe lucir un nuevo personaje de los simpson
  nuevo : IPersonaje = {
    name : '',
    lastname : ''
  }

  //  Metodo para agregar un nuevo personaje
  agregar(){
    //  Verificar que no venga vacio
    if ( this.nuevo.name.trim().length === 0) { return } ;
    //  Agregar un nuevo personaje
    this.simpsonServices.addPersonaje( this.nuevo )
    //  Resetear el objeto de nuevo personaje
    this.nuevo = {
      name : '',
      lastname : ''
    }

  };

  /**Inicializamos el Servicio Global de la aplicacion para poder acceder
   * a todos los datos necesarios para ejercer la logica de agregar un personaje
   * asi como metodos y propiedades globales.
   */
  constructor( private simpsonServices: SimpsonServices){}

}
