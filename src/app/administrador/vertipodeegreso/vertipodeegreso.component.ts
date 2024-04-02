import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

export interface Tipoegresos{
  id: number;
  tipoegreso:string;
  descripcionegreso:string;
  gasto:string;
  
}

@Component({
  selector: 'app-vertipodeegreso',
  templateUrl: './vertipodeegreso.component.html',
  styleUrls: ['./vertipodeegreso.component.css']
})
export class VertipodeegresoComponent {
  listTipos:any=[];

  constructor(private router: Router,private TipoS:AdminService) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }

  loadProductos(){
    return this.TipoS.getVerTipos().subscribe((data:{})=>{
      console.log(data);
      this.listTipos=data;
    })
  }


  agregartipo(): void {
    this.router.navigate(['/agregar-tipo']);
  }
  editartipo(): void {
    this.router.navigate(['/editar-tipo']);
  }
}
