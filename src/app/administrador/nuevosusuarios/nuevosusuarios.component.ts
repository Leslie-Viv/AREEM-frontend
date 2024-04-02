import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

export interface Usuarios {
  id: number;
  nombreempresa: string;
  nombrecompleto: string;
  email: string;
  password: string;
  rol_id: string;
}

@Component({
  selector: 'app-nuevosusuarios',
  templateUrl: './nuevosusuarios.component.html',
  styleUrls: ['./nuevosusuarios.component.css']
})
export class NuevosusuariosComponent {
    listUsuarios: Usuarios[] = []; // Asegúrate de importar la interfaz Usuarios
  
    constructor(private router: Router, private UsuariosS: AdminService) {}
  
    paginap(): void {
      this.router.navigate(['/inicio-admin']);
    }
  
    ngOnInit(): void {
      this.loadUsers();
    }
  
    loadUsers() {
      this.UsuariosS.getVerUsuarios().subscribe((data: any) => { // Aquí deberías cambiar `any` por el tipo adecuado si es diferente
        console.log(data);
        this.listUsuarios = Object.values(data.users); // Convierte el objeto en una matriz
      });
    }
  
    Nuevousuario(): void {
      this.router.navigate(['/nuevo-usuario']);
    }
  
    editarusuario(): void {
      this.router.navigate(['/editar-usuario']);
    }
  }
  
