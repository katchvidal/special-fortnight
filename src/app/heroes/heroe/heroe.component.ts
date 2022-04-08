import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroe.component.html'
})
export class HeroesComponent {

  nombre : string = 'iroman'
  edad : number = 35

  obtenerNombre() : string {
    return `${ this.nombre } ${ this.edad }`
  }

  get nombreUpperCase() : string {
    return `${ this.nombre }`.toUpperCase() //  Retorna un String Uppercase
  }

  changeHero() : void {
    this.nombre = 'spiderman'
  }

  changeAge() : void {
    this.edad = 36
  }

  resetChange() : void {
    this.nombre = 'iroman',
    this.edad = 35
  }

}