import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Tipoegresos{
  Id: number;
  Tipo_de_egreso:string;
  Descripcion_egreso:string;
  Es_gasto:string;
  

}

@Component({
  selector: 'app-vertipodeegreso',
  templateUrl: './vertipodeegreso.component.html',
  styleUrls: ['./vertipodeegreso.component.css']
})
export class VertipodeegresoComponent {
  constructor(private router: Router) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
  dataSource: Tipoegresos[] = [
    {Id:1,Tipo_de_egreso:'2',Descripcion_egreso:'2',Es_gasto:'no'},
  ];

  displayedColumns: string[] = ['Id','Tipo_de_egreso','Descripcion_egreso','Es_gasto'];

  agregartipo(): void {
    this.router.navigate(['/agregar-tipo']);
  }
  editartipo(): void {
    this.router.navigate(['/editar-tipo']);
  }
}
