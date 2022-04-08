import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/app-contador.component";



@NgModule({
    declarations : [
        ContadorComponent,  //  Modulos que tienen acceso
    ],
    exports : [
        ContadorComponent   //  Se puede visualizar del modulo hacia afuera
    ],
    imports : [
        CommonModule    //  Habilita las directivas Ngif, Ngfor, eventos Click ...
    ]
})
export class ContadorModule{}