import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ListadoComponent } from "../listado/listado.component";
import { HeroComponent } from "./heroe.component";

@NgModule({
    declarations: [
        HeroComponent,
        ListadoComponent
    ],
    exports: [
        // componentes que quiero que sean visibles desde afuera
        ListadoComponent
    ],
    imports: [
        // Modulos solamente
        CommonModule
    ]
})
export class HeroesModule {};

