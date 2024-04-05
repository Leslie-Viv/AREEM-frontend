import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { PageOrientation } from './../../../../node_modules/@types/pdfmake/interfaces.d';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

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
  ngOnInit(): void {
    this.loadIngresos();
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }
 
  loadIngresos(){
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

  
  archivarIngreso(id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Deseas archivar el ingreso?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, archivar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.ingresos.archivarIngreso(id).subscribe(
          () => {
            swalWithBootstrapButtons.fire(
              '¡Archivado!',
              'El ingreso ha sido archivado',
              'success'
            );
            this.loadIngresos(); // Puedes realizar acciones adicionales aquí después de archivar el ingreso
          },
          (error) => {
            console.error('Error al archivar el ingreso:', error);
            swalWithBootstrapButtons.fire(
              'Error',
              'Error al archivar el ingreso',
              'error'
            );
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Ingreso no archivado',
          'error'
        );
      }
    });
  }

  
  generatePDF(ingresos: any[]): void {
    try {
      const documentDefinition = {
        pageOrientation: 'landscape' as PageOrientation, // Cambiar la orientación a horizontal
        content: [
          { text: 'Lista de Ingresos', style: 'header' },
          '\n\n',
          {
            table: {
              headerRows: 1,
              widths: [40, 80, 90, 80, 80, 80, 80, 80, 40],
              body: [
                ['id', 'Nombre completo','Nombre de Unidad De Negocio','Año mes de reporte','Producto', 'Fecha real', 'Fecha Sistema','Monto total', 'Clave de usuario'],
                ...ingresos.map((t: any) => [t.id, t.nombrecompleto,t.nombreunidad,t.anomesdereporte,t.producto,t.fechareal, t.created_at, t.montototal, t.user_id ]),
              ],
            },
          },
        ],
        styles: {
          header: {
            fontSize: 12,
            bold: true,
          },
        },
      };

      // Obtener la fecha actual y formatearla
      const currentDate = new Date(); // Fecha y hora local del usuario
      const utcDate = new Date(Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())); // Fecha y hora en UTC
      const formattedDate = utcDate.toISOString().slice(0, 10); // Convertir a ISO y obtener la fecha en formato YYYY-MM-DD
      
      // Nombre del archivo PDF con la fecha actual
      const fileName = `Lista_de_Ingresos_${formattedDate}.pdf`;
      
      // Crear el PDF
      const pdfDocGenerator = pdfMake.createPdf(documentDefinition);
      

      Swal.fire({
        icon: 'success',
        text: 'PDF generado correctamente',
        showConfirmButton: false,
        timer: 1500
      });

      // Descargar el PDF
      pdfDocGenerator.download(fileName);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al generar el PDF',
        showConfirmButton: true
      });
    }
  }

  editaringreso(ingreso: Ingreso): void {
    this.router.navigate(['/editar-ingreso', ingreso.id]);
  }



}
