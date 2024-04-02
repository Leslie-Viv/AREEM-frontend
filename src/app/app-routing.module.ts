import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaprincipalComponent } from './administrador/paginaprincipal/paginaprincipal.component';
import { LoginComponent } from './login/login.component';
import { IngresosComponent } from './administrador/ingresos/ingresos.component';
import { NuevosusuariosComponent } from './administrador/nuevosusuarios/nuevosusuarios.component';
import { NuevoUsuarioComponent } from './administrador/nuevo-usuario/nuevo-usuario.component';
import { NuevoIngresoComponent } from './administrador/nuevo-ingreso/nuevo-ingreso.component';
import { VerperfilComponent } from './administrador/verperfil/verperfil.component';
import { VeregresosComponent } from './administrador/veregresos/veregresos.component';
import { AgregaregresoComponent } from './administrador/agregaregreso/agregaregreso.component';
import { VerunidadesdenegocioComponent } from './administrador/verunidadesdenegocio/verunidadesdenegocio.component';
import { VerempresasComponent } from './administrador/verempresas/verempresas.component';
import { VertipodeegresoComponent } from './administrador/vertipodeegreso/vertipodeegreso.component';
import { VerOrigenComponent } from './administrador/ver-origen/ver-origen.component';
import { VerProductosyserviciosComponent } from './administrador/ver-productosyservicios/ver-productosyservicios.component';
import { VerPapeleraComponent } from './administrador/ver-papelera/ver-papelera.component';
import { EditarIngresoComponent } from './administrador/editar-ingreso/editar-ingreso.component';
import { EditarEgresoComponent } from './administrador/editar-egreso/editar-egreso.component';
import { EditarUsuarioComponent } from './administrador/editar-usuario/editar-usuario.component';
import { EditarUnidadesdenegocioComponent } from './administrador/editar-unidadesdenegocio/editar-unidadesdenegocio.component';
import { AgregarUnidadesdenegocioComponent } from './administrador/agregar-unidadesdenegocio/agregar-unidadesdenegocio.component';
import { EditarEmpresaComponent } from './administrador/editar-empresa/editar-empresa.component';
import { AgregarEmpresaComponent } from './administrador/agregar-empresa/agregar-empresa.component';
import { AgregarTipodeegresoComponent } from './administrador/agregar-tipodeegreso/agregar-tipodeegreso.component';
import { EditarTipodeegresoComponent } from './administrador/editar-tipodeegreso/editar-tipodeegreso.component';
import { AgregarOrigendeegresoComponent } from './administrador/agregar-origendeegreso/agregar-origendeegreso.component';
import { EditarOrigendeegresoComponent } from './administrador/editar-origendeegreso/editar-origendeegreso.component';
import { EditarProductosyserviciosComponent } from './administrador/editar-productosyservicios/editar-productosyservicios.component';
import { AgregarProductosyserviciosComponent } from './administrador/agregar-productosyservicios/agregar-productosyservicios.component';
import { HomegerenteComponent } from './gerente/homegerente/homegerente.component';
import { VerIngresogerenteComponent } from './gerente/ver-ingresogerente/ver-ingresogerente.component';
import { VerEgresogerenteComponent } from './gerente/ver-egresogerente/ver-egresogerente.component';
import { NuevoIngresogerenteComponent } from './gerente/nuevo-ingresogerente/nuevo-ingresogerente.component';
import { NuevoEgresogerenteComponent } from './gerente/nuevo-egresogerente/nuevo-egresogerente.component';
import { VerPerfilgerenteComponent } from './gerente/ver-perfilgerente/ver-perfilgerente.component';
import { HomeFinanzasComponent } from './finanzas/home-finanzas/home-finanzas.component';
import { VerIngresofinanzasComponent } from './finanzas/ver-ingresofinanzas/ver-ingresofinanzas.component';
import { NuevoIngresofinanzasComponent } from './finanzas/nuevo-ingresofinanzas/nuevo-ingresofinanzas.component';
import { VerEgresosfinanzasComponent } from './finanzas/ver-egresosfinanzas/ver-egresosfinanzas.component';
import { NuevoEgresofinanzasComponent } from './finanzas/nuevo-egresofinanzas/nuevo-egresofinanzas.component';
import { VerPerfilfinanzasComponent } from './finanzas/ver-perfilfinanzas/ver-perfilfinanzas.component';

const routes: Routes = [
  // Otras rutas existentes
  { path: 'inicio-admin', component: PaginaprincipalComponent }, // Pagina principal admin
  { path: '', component: LoginComponent, pathMatch: 'full' }, // Ruta raiz
  { path: 'ingresos-admin', component: IngresosComponent }, // Ver ingresos
  { path: 'editar-ingreso', component: EditarIngresoComponent }, // Registrar nuevo ingreso
  { path: 'nuevo-ingreso', component: NuevoIngresoComponent }, // Registrar nuevo ingreso
  { path: 'nuevos-usuarios', component: NuevosusuariosComponent }, // Verusuarios
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent}, // Agregar nuevo usuario
  { path: 'editar-usuario', component: EditarUsuarioComponent}, // Editar usuario
  { path: 'ver-usuario', component: VerperfilComponent},//Ver mi perfil
  { path: 'ver-egresos', component: VeregresosComponent},//Ver egresos
  { path: 'registrar-egreso', component: AgregaregresoComponent},//Agregar egreso
  { path: 'editar-egreso', component: EditarEgresoComponent},//Agregar egreso
  { path: 'agregar-egreso', component: AgregaregresoComponent},//Agregar egreso
  { path: 'ver-unidad', component: VerunidadesdenegocioComponent},//Ver unidad de negocio
  { path: 'editar-unidad', component: EditarUnidadesdenegocioComponent},//Editar unidad de negocio
  { path: 'agregar-unidad', component: AgregarUnidadesdenegocioComponent},//Agregar unidad de negocio
  { path: 'ver-empresas', component: VerempresasComponent},//Ver empresas
  { path: 'editar-empresa', component: EditarEmpresaComponent},//Editar empresas
  { path: 'agregar-empresa', component: AgregarEmpresaComponent},//Editar empresas
  { path: 'ver-tipodeegreso', component: VertipodeegresoComponent},//Ver tipo de egreso
  { path: 'agregar-tipo', component: AgregarTipodeegresoComponent},//Agregar tipo de egreso
  { path: 'editar-tipo', component: EditarTipodeegresoComponent},//Editar tipo de egreso
  { path: 'ver-origen', component: VerOrigenComponent},//Ver origen egreso
  { path: 'agregar-origen', component: AgregarOrigendeegresoComponent},//Agregar origen egreso
  { path: 'editar-origen', component: EditarOrigendeegresoComponent},//Editar origen egreso
  { path: 'ver-productosyservicios', component: VerProductosyserviciosComponent},//Ver productos y servicios
  { path: 'editar-productosyservicios', component: EditarProductosyserviciosComponent},//Editar productos y servicios
  { path: 'agregar-productosyservicios', component: AgregarProductosyserviciosComponent},//Agregar productos y servicios
  { path: 'ver-papelera', component: VerPapeleraComponent},//Ver papelera
//Rutas gerente
  { path: 'home-gerente', component: HomegerenteComponent},//Pagina principal gerente
  { path: 'ver-ingresosgerente', component: VerIngresogerenteComponent},//Ver ingresos gerente
  { path: 'nuevo-ingresogerente', component: NuevoIngresogerenteComponent},//Nuevo ingreso gerente
  { path: 'ver-egresosgerente', component: VerEgresogerenteComponent},//Ver egresos gerente
  { path: 'nuevo-egresogerente', component: NuevoEgresogerenteComponent},//Nuevo egreso gerente
  { path: 'ver-usuariogerente', component: VerPerfilgerenteComponent},//Ver perfil gerente
//Rutas Finanzas
  { path: 'home-finanzas', component: HomeFinanzasComponent},//Pagina principal finanzas
  { path: 'ver-ingresosfinanzas', component: VerIngresofinanzasComponent},//Ver ingresos finanzas
  { path: 'nuevo-ingresofinanzas', component: NuevoIngresofinanzasComponent},//Nuevo ingreso finanzas
  { path: 'ver-egresosfinanzas', component: VerEgresosfinanzasComponent},//Ver egresos finanzas
  { path: 'nuevo-egresofinanzas', component: NuevoEgresofinanzasComponent},//Nuevo egreso finanzas
  { path: 'ver-usuariofinanzas', component: VerPerfilfinanzasComponent},//Ver perfil finanzas
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
