import { Component } from '@angular/core'

@Component({
selector : 'app-contador',
template : `
            <h2> Pagina Principal de App Component </h2>
            <h3> {{ title }} </h3>

            <span> Acumulador de 5 en 5 empezando en: <strong> {{ contador }} </strong> </span>
            <br/>
            <button (click)="math( base )" > Acumular + {{ base }} </button>
            <br/>
            <br/>
            <button (click)="math( -base )" > Sustraer - {{ base }} </button>
    `
})
export class ContadorComponent {
    public title : string = 'Contador App'; //  Podemos insertar una variable ( espacio de memoria en el HTML usando doble llave {{' nombre de la variable '}} )
    public base     : number = 5
    public contador : number = 0

    //  Podemos crear un metodo para sumar ( type class )
    math( value : number  ){
        this.contador += value ;
    }
}