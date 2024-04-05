import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { EditarEmpresaComponent } from "./editar-empresa/editar-empresa.component";
import { MatIconModule } from "@angular/material/icon";
import {  MatDialogModule } from '@angular/material/dialog';
import { VerempresasComponent } from "./verempresas/verempresas.component";




@NgModule({
    declarations:[
        VerempresasComponent,
        EditarEmpresaComponent
    ],
    imports:[
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        MatIconModule,
        MatDialogModule,
    ],
    exports:[
        VerempresasComponent,
        EditarEmpresaComponent
    ],
    providers: [
    
      ],
})
export class AdminModule{

}