import { Component } from '@angular/core';
import { Router } from '@angular/router';


export interface Egresos{
  Id: number;
  Nombre_empresa: string;
  Fecha_real: string;
  Fecha_sistema: string;
  Ano_mes_de_reporte: string;
  Cuenta_origen_egreso: string;
  Tipo_de_cuenta:string;
  Tipo_de_egreso:string;
  Descripcion_egreso:string;
  Es_gasto:string;
  Unidad_de_negocio:string;
  Monto_total:string;

}


@Component({
  selector: 'app-ver-egresogerente',
  templateUrl: './ver-egresogerente.component.html',
  styleUrls: ['./ver-egresogerente.component.css']
})
export class VerEgresogerenteComponent {
  constructor(private router: Router) { }

  paginap(): void {
    this.router.navigate(['/home-gerente']);
  }
  dataSource: Egresos[] = [
    { Id:1, Nombre_empresa: 'Juan', Fecha_real: '88', Fecha_sistema:'01', Ano_mes_de_reporte:'01',Cuenta_origen_egreso:'bodega',Tipo_de_cuenta:'1',Tipo_de_egreso:'2',Descripcion_egreso:'2',Es_gasto:'no',Unidad_de_negocio:'bodega', Monto_total:'00'},
  ];

  displayedColumns: string[] = ['Id','Nombre_empresa', 'Fecha_real','Fecha_sistema','Ano_mes_de_reporte','Cuenta_origen_egreso','Tipo_de_cuenta','Tipo_de_egreso','Descripcion_egreso','Es_gasto','Unidad_de_negocio','Monto_total'];

  agregaregreso(): void {
    this.router.navigate(['/nuevo-egresogerente']);
  }

}
