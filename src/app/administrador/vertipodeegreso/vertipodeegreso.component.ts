import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;


export interface Tipoegresos{
  id: number;
  N1:string;
  N2:string;
  N3:string;
  N4:string;
  N5:string;
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

  ngOnInit(): void {
    this.loadTipos();
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }

  loadTipos(){
    return this.TipoS.getVerTipos().subscribe((data:{})=>{
      console.log(data);
      this.listTipos=data;
    })
  }


  agregartipo(): void {
    this.router.navigate(['/agregar-tipo']);
  }
  

  
    
  generatePDF(tipos: any[]): void {
    try {
      const documentDefinition = {
        content: [
          { text: 'Lista de Tipos de Egreso', style: 'header' },
          '\n\n',
          {
            table: {
              headerRows: 1,
              widths: [50, 50, 50, 50, 50, 50, 80, 60],
              body: [
                ['id', 'N1','N2','N3','N4','N5','Descripción de egreso', 'Gasto'],
                ...tipos.map((t: any) => [t.id, t.N1,t.N2,t.N3,t.N4,t.N5, t.descripcionegreso, t.gasto ]),
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
      const fileName = `Lista_de_Tipos_De_Egreso_${formattedDate}.pdf`;
      
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

  editartipo(tipo: Tipoegresos): void {
    this.router.navigate(['/editar-tipo', tipo.id]);
  }



}
