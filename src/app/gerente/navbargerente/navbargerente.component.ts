import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GerenteService } from 'src/app/services/gerente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbargerente',
  templateUrl: './navbargerente.component.html',
  styleUrls: ['./navbargerente.component.css']
})
export class NavbargerenteComponent {
  constructor(private router: Router, private gerenteS:GerenteService) { }

  Verperfilgerente(): void {
    this.router.navigate(['/ver-usuariogerente']);
  }

  userData: any = {};

  logOut() {
    this.gerenteS.logout().subscribe(
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
