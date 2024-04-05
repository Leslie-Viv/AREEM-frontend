import { Component } from '@angular/core';
import { PageOrientation } from './../../../../node_modules/@types/pdfmake/interfaces.d';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

export interface PapeleraEgreso{
  id: number;
  nombrecompleto: string;
  nombreempresa: string;
  anomesdereporte: string;
  origenegreso: string;
  tipodecuenta: string;
  N1: string;
  N2: string;
  N3: string;
  N4: string;
  N5: string;
  descripcionegreso:string;
  gasto:string;
  nombreunidad:string;
  created_at:string;
  fechareal:string;
  montototal:string;
  user_id:string;

}

@Component({
  selector: 'app-ver-papeleraegresos',
  templateUrl: './ver-papeleraegresos.component.html',
  styleUrls: ['./ver-papeleraegresos.component.css']
})
export class VerPapeleraegresosComponent {
  listPapeleraE:any=[];

  
  constructor(private router: Router, private papelera:AdminService) { }

  ngOnInit(): void {
    this.loadPapeleraE();
  }

  paginap(): void {
    this.router.navigate(['/inicio-admin']);
  }

  loadPapeleraE(){
    return this.papelera.getVerPapeleraE().subscribe((data:{})=>{
      console.log(data);
      this.listPapeleraE=data;
    })
  }

  recuperarEgreso(id: number): void {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Deseas recuperar el egreso?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, recuperar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.papelera.recuperarEgreso(id).subscribe(
          () => {
            swalWithBootstrapButtons.fire(
              '¡Recuperado!',
              'El egreso ha sido recuperado',
              'success'
            );
            this.loadPapeleraE(); // Puedes realizar acciones adicionales aquí después de archivar el ingreso
          },
          (error) => {
            console.error('Error al recuperar el egreso:', error);
            swalWithBootstrapButtons.fire(
              'Error',
              'Error al recuperar el egreso',
              'error'
            );
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Egreso no recuperado',
          'error'
        );
      }
    });
  }

    
  generatePDF(egresos: any[]): void {
    try {
      const documentDefinition = {
        pageOrientation: 'landscape' as PageOrientation, // Cambiar la orientación a horizontal
        content: [
          { text: 'Lista de Papelera de reciclaje (Egresos)', style: 'header' },
          '\n\n',
          {
            table: {
              headerRows: 1,
              widths: [20, 40, 40, 30, 40, 30, 20, 20, 20, 20, 20, 50, 40, 50, 50 ,40, 40, 40],
              body: [
                ['id', 'Nombre completo','Nombre empresa','Año mes de reporte','Cuenta origen egreso','Tipo de cuenta','N1', 'N2', 'N3','N4','N5','Descripción de egreso','Es gasto','Unidad de Negocio', 'Fecha Sistema', 'Fecha real','Monto total', 'Clave de usuario' ],
                ...egresos.map((t: any) => [t.id, t.nombrecompleto,t.nombreempresa,t.anomesdereporte,t.origenegreso,t.tipodecuenta, t.N1,t.N2,t.N3,t.N4,t.N5, t.descripcionegreso,t.gasto,t.nombreunidad,t.created_at, t.fechareal,t.montototal, t.user_id,]),
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
      const fileName = `Lista_de_Reciclaje_Egresos_${formattedDate}.pdf`;
      
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
