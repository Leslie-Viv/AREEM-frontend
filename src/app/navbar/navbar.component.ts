import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router, private userA: AdminService) { }

  Verperfil(): void {
    this.router.navigate(['/ver-usuario']);
  }

  userData: any = {};

  logOut() {
    this.userA.logout().subscribe(
      (response) => {
        console.log('Logout successfully:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Logout error:', error);
      }
    );
  }


  
  confirmAction() {
    Swal.fire({
      title: '¿Estás seguro que quieres cerrar sesión?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Cerrar Sesión!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.logOut();
        Swal.fire({
          title: 'Cierre de Sesión!',
          text: 'Sesión cerrada exitosamente!',
          icon: 'success',
          timer: 1500, // 1.5 seconds
          showConfirmButton: false // Hide the button "OK"
        });
      }
    });
  }
}
