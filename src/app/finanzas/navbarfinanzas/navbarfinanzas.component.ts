import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FinanzasService } from 'src/app/services/finanzas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbarfinanzas',
  templateUrl: './navbarfinanzas.component.html',
  styleUrls: ['./navbarfinanzas.component.css']
})
export class NavbarfinanzasComponent {
  constructor(private router: Router, private finanzaS:FinanzasService) { }

  Verperfilfinanzas(): void {
    this.router.navigate(['/ver-usuariofinanzas']);
  }

  userData: any = {};

  logOut() {
    this.finanzaS.logout().subscribe(
      (response) => {
        console.log('Cierre de Sesión exitosa:', response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('No se pudo cerrar sesión:', error);
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
