import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

export interface Productos{
  id:number;
  producto:string;
}
@Component({
  selector: 'app-ver-productosyservicios',
  templateUrl: './ver-productosyservicios.component.html',
  styleUrls: ['./ver-productosyservicios.component.css']
})
export class VerProductosyserviciosComponent {
  listProductos:any=[];


  constructor(private router: Router, private admin:AdminService) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  loadProductos(){
    return this.admin.getVerproductos().subscribe((data:{})=>{
      console.log(data);
      this.listProductos=data;
    })
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
  

  editarproducto(): void {
    this.router.navigate(['/editar-productosyservicios']);
  }
  agregarproducto(): void {
    this.router.navigate(['/agregar-productosyservicios']);
  }


}
