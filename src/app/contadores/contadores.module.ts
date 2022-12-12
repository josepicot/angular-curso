import { NgModule } from "@angular/core";
import { ContadorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        // componentes que quiero que sean visibles desde afuera
        ContadorComponent
    ],
    imports: [
        // Modulos solamente
    ]
})
export class ContadoresModule {};
