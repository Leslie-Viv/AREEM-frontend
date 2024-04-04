import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { EditarEmpresaComponent } from '../editar-empresa/editar-empresa.component';


export interface Empresa{
  id:number;
  nombreempresa:string;
}

@Component({
  selector: 'app-verempresas',
  templateUrl: './verempresas.component.html',
  styleUrls: ['./verempresas.component.css']
})
export class VerempresasComponent implements OnInit{

  listEmpresas:any=[];

  constructor(private router: Router, private admin:AdminService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadEmpresas();
  }

  loadEmpresas(){
    return this.admin.getVerempresas().subscribe((data:{})=>{
      console.log(data);
      this.listEmpresas=data;
    })
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
  // dataSource: Empresas[] = [
  //   { Id:1, Nombre_empresa:'bodega'},
  // ];

  // displayedColumns: string[] = ['Id','Nombre_empresa'];

  agregarempresa(): void {
    this.router.navigate(['/agregar-empresa']);
  }
  

// editarempresa(empresa: Empresa) {
//   console.log('Empresa a editar:', empresa);
//   // Abre el componente de edición en un cuadro de diálogo modal
//   const dialogRef = this.dialog.open(EditarEmpresaComponent, {
//     data: { empresa } // Pasa el objeto de la empresa al componente de edición
//   });

//      // Suscríbete a cualquier acción realizada en el componente de edición
//      dialogRef.afterClosed().subscribe(
//       result => {
//         console.log('Resultado después de cerrar:', result);
//         this.loadEmpresas();
//       },
//       error => {
//         console.error('Error al cerrar el diálogo:', error);
//       }
//     );
//   }

editarempresa(empresa: Empresa) {
  console.log('Empresa a editar:', empresa);
  // Navega a la ruta del componente de edición y pasa el objeto de la empresa como parámetro
  this.router.navigate(['editar-empresa'], { state: { empresa: empresa } });
}


}
