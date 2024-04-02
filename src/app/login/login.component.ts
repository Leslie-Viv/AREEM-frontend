import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent {
  constructor(private router: Router,private theForm: FormBuilder, private admin: AdminService) { }

  userD: any = {};
  // userD: any[] = [];

  ngOnInit(): void {
  }
  showPassword: boolean = false;
  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  goodNot() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Login exitoso!!!',
      showConfirmButton: false,
      timer: 1500
    })
  }

  badNot() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Algo anda mal!'
    })
  }


  loginForm: FormGroup = this.theForm.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]]
  } )

  validInput(input: string) {
    const control = this.loginForm.get(input);

    if (!control) {
      return false; // El control no existe
    }

    if (control.touched && control.errors) {
      if (control.errors['required']) {
        return true; // El campo es requerido y ha sido tocado
      }

      if (control.errors) {
        return true; // El campo es demasiado corto y ha sido tocado
      }
      if (control.errors) {
        return true; // El campo es demasiado corto y ha sido tocado
      }
    }

    return false; // No hay errores de validación o el control no ha sido tocado
  }


  
  
  startLogin() {
    this.admin.loginIn(this.loginForm.value).subscribe(
      (datauser: any) => {
        if (datauser && datauser.user) {
          this.userD = datauser.user;
          this.loginForm.reset();

          switch (this.userD.rol_id) {
            case 1:
              this.router.navigate(['/inicio-admin']);
              this.goodNot();
              break;
            case 2:
              this.router.navigate(['/home-gerente']);
              this.goodNot();
              break;
            case 3:
              this.router.navigate(['/home-finanzas']);
              this.goodNot();
              break;
            default:
              this.admin.logout();
          }
          // if (this.userD.rol_id === 1) {
          //   this.rou.navigate(['/h-admin']);
          // } else if (this.userD.rol_id === 2) {
          //   this.rou.navigate(['/h-agr']);
          // } else {
          //   this.admin.logout();
          // }
          // this.goodNot();
        }
      },
      error => {
        this.loginForm.reset();
        this.badNot();
        console.log('Este es el error:', error);
      }
    );
  }
}

