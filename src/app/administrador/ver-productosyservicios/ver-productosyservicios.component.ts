import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Productos{
  Id: number;
  Descripcion_servicio:string;

}
@Component({
  selector: 'app-ver-productosyservicios',
  templateUrl: './ver-productosyservicios.component.html',
  styleUrls: ['./ver-productosyservicios.component.css']
})
export class VerProductosyserviciosComponent {
  constructor(private router: Router) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
  dataSource: Productos[] = [
    { Id:1, Descripcion_servicio:'bodega'},
  ];

  displayedColumns: string[] = ['Id','Descripcion_servicio'];



}
