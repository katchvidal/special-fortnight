import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes : string[] = ['Goku', 'Batman', 'Superman', 'Ash Ketchup']
  delete :string[]= []
  
  oneDelete()  {
    const borrado : any = this.heroes.shift()
    return this.delete.push( borrado )

  }

  
  
}
