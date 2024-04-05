import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


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

  ngOnInit(): void {
    this.loadUnidades();
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }

  loadUnidades(){
    return this.admin.getVerUnidades().subscribe((data:{})=>{
      console.log(data);
      this.listUnidades=data;
    })
  }

  agregarunidad(): void {
    this.router.navigate(['/agregar-unidad']);
  }

  editarunidad(unidad: Unidaddenegocio): void {
    this.router.navigate(['/editar-unidad', unidad.id]);
  }
  

    
  generatePDF(unidades: any[]): void {
    try {
      const documentDefinition = {
        content: [
          { text: 'Lista de Unidades de Negocio', style: 'header' },
          '\n\n',
          {
            table: {
              headerRows: 1,
              widths: [100, 400],
              body: [
                ['id', 'nombreunidad'],
                ...unidades.map((u: any) => [u.id, u.nombreunidad]),
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
      const fileName = `Lista_de_Unidades_De_Negocio_${formattedDate}.pdf`;
      
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

}
