import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Usuarios{
  Id: number;
  Nombre_empresa: string;
  Nombre_completo: string;
  Email: string;
}


@Component({
  selector: 'app-nuevosusuarios',
  templateUrl: './nuevosusuarios.component.html',
  styleUrls: ['./nuevosusuarios.component.css']
})
export class NuevosusuariosComponent {
  constructor(private router: Router) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
  dataSource: Usuarios[] = [
    { Id:1, Nombre_empresa: 'Juan', Nombre_completo: 'Pérez', Email:'admin@gmail.com' },
  ];

  displayedColumns: string[] = ['Id','Nombre_empresa', 'Nombre_completo','Email'];

  Nuevousuario(): void {
    this.router.navigate(['/nuevo-usuario']);
  }

  editarusuario(): void {
    this.router.navigate(['/editar-usuario']);
  }

}
