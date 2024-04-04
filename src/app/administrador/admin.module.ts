import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EditarEmpresaComponent } from "./editar-empresa/editar-empresa.component";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
    declarations:[
        EditarEmpresaComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        MatIconModule
    ],
    exports:[],
})
export class AdminModule{

}