import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroesComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations : [
        //  Componentes que interactuan en este Modulo( podria
        //  ser paqueteria de Bootstrap, Modulos que intereactuan.)
        ListadoComponent,
        HeroesComponent
    ],
    exports : [
        //  Modulos que podemos exportar
        ListadoComponent
    ],
    imports : [
        CommonModule    //  Habilita las directivas Ngif, Ngfor, eventos Click ...
    ]
})
export class HeroesModule{}