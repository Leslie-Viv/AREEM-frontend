import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-verperfil',
  templateUrl: './verperfil.component.html',
  styleUrls: ['./verperfil.component.css']
})
export class VerperfilComponent {
  userInfo: any = {
    nombreempresa: '',
    nombrecompleto: '',
    email: ''
  };

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private adminService: AdminService) { 
      
    }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo() {
    this.adminService.getUserInfo().subscribe(
      (data: any) => {
        this.userInfo = data[0]; // Asigna el primer objeto del array de datos
        console.log('Datos del usuario:', this.userInfo); // Verifica los datos en la consola
      },
      (error: any) => {
        console.log('Error al obtener los datos del usuario:', error);
      }
    );
  
  
  }
  


  

  
}
