import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Origen{
  Id: number;
  Cuenta_origen_egreso: string;
  Tipo_de_cuenta:string;
}
@Component({
  selector: 'app-ver-origen',
  templateUrl: './ver-origen.component.html',
  styleUrls: ['./ver-origen.component.css']
})
export class VerOrigenComponent {
  constructor(private router: Router) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
  dataSource: Origen[] = [
    { Id:1,Cuenta_origen_egreso:'bodega',Tipo_de_cuenta:'1'},
  ];

  displayedColumns: string[] = ['Id','Cuenta_origen_egreso','Tipo_de_cuenta'];

  editarorigen(): void {
    this.router.navigate(['/editar-origen']);
  }
  agregarorigen(): void {
    this.router.navigate(['/agregar-origen']);
  }

}
