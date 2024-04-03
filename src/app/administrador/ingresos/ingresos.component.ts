import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

export interface Ingreso{
  id:number;
  nombrecompleto:string;
  nombreunidad:string;
  anomesdereporte:string;
  producto:string;
  fechareal:string;
  created_at:string;
  montototal:string;
  user_id:string;
}

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent {
  listIngresos:any=[];

  constructor(private router: Router,private ingresos:AdminService) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
 
  loadProductos(){
    return this.ingresos.getVerIngresos().subscribe((data:{})=>{
      console.log(data);
      this.listIngresos=data;
    })
  }


  Ingreso(): void {
    this.router.navigate(['/nuevo-ingreso']);
  }
  editar(): void {
    this.router.navigate(['/editar-ingreso']);
  }

}
