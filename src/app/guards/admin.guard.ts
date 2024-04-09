import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap, map } from 'rxjs';
import Swal from 'sweetalert2';
import { AdminService } from '../services/admin.service';



@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private admin: AdminService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.admin.isLoggedIn) {
      console.log('Access allowed');
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


}




// export const adminGuard: CanActivateFn = (route, state) => {
//   return true;
// };