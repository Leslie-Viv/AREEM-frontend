import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class DefaultGuard implements CanActivate {

  constructor(private auth: AdminService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // Suponiendo que tienes una manera de obtener el usuario actual del servicio AdminService
      const user = this.auth.getUserInfo(); // Obtener el usuario actual del servicio AdminService

      if (user) { // Verificar si se ha obtenido un usuario
        console.log('Acceso permitido');
        return true; // Usuario autenticado
      } else {
        console.log('Acceso denegado');
        this.router.navigate(['login']); // Redirigir al inicio de sesión
        return false;
      }
  }

}


