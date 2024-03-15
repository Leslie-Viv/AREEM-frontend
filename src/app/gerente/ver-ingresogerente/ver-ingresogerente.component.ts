import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Ingreso{
  Id: number;
  Usuario: string;
  Unidad_de_Negocio: string;
  Ano_mes_de_reporte: number;
  Fecha_Real: number;
  Fecha_Sistema: number;
  Monto_Total: number

  
}

@Component({
  selector: 'app-ver-ingresogerente',
  templateUrl: './ver-ingresogerente.component.html',
  styleUrls: ['./ver-ingresogerente.component.css']
})
export class VerIngresogerenteComponent {
  constructor(private router: Router) { }

  paginap(): void {
    this.router.navigate(['/home-gerente']);
  }
  dataSource: Ingreso[] = [
    { Id:1, Usuario: 'Juan', Unidad_de_Negocio: 'Pérez', Ano_mes_de_reporte: 30,Fecha_Real: 23,Fecha_Sistema: 56 ,Monto_Total: 1300 },
  ];

  displayedColumns: string[] = ['Id','Usuario', 'Unidad_de_Negocio','Ano_mes_de_reporte','Fecha_Real','Fecha_Sistema','Monto_Total'];

  Ingreso(): void {
    this.router.navigate(['/nuevo-ingresogerente']);
  }

}
