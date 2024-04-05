
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

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
  

  agregarproducto(): void {
    this.router.navigate(['/agregar-productosyservicios']);
  }

  eliminarProducto(id: number) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success mx-1',
        cancelButton: 'btn btn-danger mx-1'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: '¿Deseas eliminar el producto?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, aceptar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.admin.eliminarProducto(id).subscribe(
          (res: any) => {
            console.log('Producto eliminado:', res);
            swalWithBootstrapButtons.fire(
              '¡Aceptado!',
              'El producto ha sido eliminado',
              'success'
            );
            this.loadProductos();
          },
          (error) => {
            console.error('Error al eliminar producto:', error);
            Swal.fire('Error', 'Error al eliminar el producto', 'error');
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Operación cuando se cancela
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'Producto no eliminado',
          'error'
        );
      }
    });
  }

 
  generatePDF(productos: any[]): void {
    try {
      const documentDefinition = {
        content: [
          { text: 'Lista de Productos', style: 'header' },
          '\n\n',
          {
            table: {
              headerRows: 1,
              widths: [100, 400],
              body: [
                ['id', 'producto'],
                ...productos.map((p: any) => [p.id, p.producto]),
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
    const fileName = `Lista_de_Productos_${formattedDate}.pdf`;
    
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


  editarproducto(producto: Productos): void {
    this.router.navigate(['/editar-productosyservicios', producto.id]);
  }



}
