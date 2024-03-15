import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Unidaddenegocio{
  Id: number;
  Unidad_de_negocio:string;

}


@Component({
  selector: 'app-verunidadesdenegocio',
  templateUrl: './verunidadesdenegocio.component.html',
  styleUrls: ['./verunidadesdenegocio.component.css']
})
export class VerunidadesdenegocioComponent {
  constructor(private router: Router) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
  dataSource: Unidaddenegocio[] = [
    { Id:1, Unidad_de_negocio:'bodega'},
  ];

  displayedColumns: string[] = ['Id','Unidad_de_negocio'];

  agregarunidad(): void {
    this.router.navigate(['/agregar-unidad']);
  }

  editarunidad(): void {
    this.router.navigate(['/editar-unidad']);
  }

}
