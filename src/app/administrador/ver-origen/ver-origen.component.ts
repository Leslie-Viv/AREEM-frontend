import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

export interface Origen{
  id: number;
  origenegreso: string;
  tipodecuenta:string;
}
@Component({
  selector: 'app-ver-origen',
  templateUrl: './ver-origen.component.html',
  styleUrls: ['./ver-origen.component.css']
})
export class VerOrigenComponent {
  listOrigenes:any=[];

  constructor(private router: Router, private origen:AdminService) { }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
  loadProductos(){
    return this.origen.getVerOrigen().subscribe((data:{})=>{
      console.log(data);
      this.listOrigenes=data;
    })
  }

  editarorigen(): void {
    this.router.navigate(['/editar-origen']);
  }
  agregarorigen(): void {
    this.router.navigate(['/agregar-origen']);
  }

}
