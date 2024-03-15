import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Empresas{
  Id: number;
  Nombre_empresa:string;

}


@Component({
  selector: 'app-verempresas',
  templateUrl: './verempresas.component.html',
  styleUrls: ['./verempresas.component.css']
})
export class VerempresasComponent {

  constructor(private router: Router) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
  dataSource: Empresas[] = [
    { Id:1, Nombre_empresa:'bodega'},
  ];

  displayedColumns: string[] = ['Id','Nombre_empresa'];
  agregarempresa(): void {
    this.router.navigate(['/agregar-empresa']);
  }
  editarempresa(): void {
    this.router.navigate(['/editar-empresa']);
  }

}
