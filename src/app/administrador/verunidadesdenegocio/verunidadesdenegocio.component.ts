import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

export interface Unidaddenegocio{
  id: number;
  nombreunidad:string;

}


@Component({
  selector: 'app-verunidadesdenegocio',
  templateUrl: './verunidadesdenegocio.component.html',
  styleUrls: ['./verunidadesdenegocio.component.css']
})
export class VerunidadesdenegocioComponent {
  listUnidades:any=[];

  constructor(private router: Router,private admin:AdminService) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }

  loadProductos(){
    return this.admin.getVerUnidades().subscribe((data:{})=>{
      console.log(data);
      this.listUnidades=data;
    })
  }

  agregarunidad(): void {
    this.router.navigate(['/agregar-unidad']);
  }

  editarunidad(): void {
    this.router.navigate(['/editar-unidad']);
  }

}
