import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { FinanzasService } from '../services/finanzas.service';
import { GerenteService } from '../services/gerente.service';


@Injectable({
  providedIn: 'root'
})
export class GerenteGuard implements CanActivate {

  constructor(private ger: GerenteService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.ger.getAuthGer) {
      console.log('Access allowed');
      this.goodNot();
      return true; // Usuario autenticado
    } else {
      console.log('No access');
      this.alertError();
      this.router.navigate(['/login']); // Redirige al inicio de sesión
      return false;
    }


  }


  alertError() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Access is denied!',
      showConfirmButton: false,
      timer: 1500,
      allowOutsideClick: false
    })
  }

  goodNot() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Access is authorized!',
      showConfirmButton: false,
      timer: 1500
    })
  }

}