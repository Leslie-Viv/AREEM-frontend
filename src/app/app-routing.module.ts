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
import { VerEgresogerenteComponent } from './gerente/ver-egresogerente/ver-egresogerente.component';
import { NuevoEgresogerenteComponent } from './gerente/nuevo-egresogerente/nuevo-egresogerente.component';
import { VerPerfilgerenteComponent } from './gerente/ver-perfilgerente/ver-perfilgerente.component';
import { HomeFinanzasComponent } from './finanzas/home-finanzas/home-finanzas.component';
import { VerEgresosfinanzasComponent } from './finanzas/ver-egresosfinanzas/ver-egresosfinanzas.component';
import { NuevoEgresofinanzasComponent } from './finanzas/nuevo-egresofinanzas/nuevo-egresofinanzas.component';
import { VerPerfilfinanzasComponent } from './finanzas/ver-perfilfinanzas/ver-perfilfinanzas.component';
import { VerPapeleraegresosComponent } from './administrador/ver-papeleraegresos/ver-papeleraegresos.component';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  // Otras rutas existentes
  { path: 'inicio-admin', component: PaginaprincipalComponent, canActivate: [AdminGuard] }, // Pagina principal admin
  { path: 'login', component: LoginComponent }, // Ruta para el componente de inicio de sesión
  { path: '', redirectTo: '/login', pathMatch: 'full', }, // Ruta raíz redirige al componente de inicio de sesión
  { path: 'ingresos-admin', component: IngresosComponent, canActivate: [AdminGuard] }, // Ver ingresos
  { path: 'editar-ingreso/:id', component: EditarIngresoComponent, canActivate: [AdminGuard] }, // Registrar nuevo ingreso
  { path: 'nuevo-ingreso', component: NuevoIngresoComponent, canActivate: [AdminGuard]}, // Registrar nuevo ingreso
  { path: 'nuevos-usuarios', component: NuevosusuariosComponent, canActivate: [AdminGuard] }, // Verusuarios
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent, canActivate: [AdminGuard]}, // Agregar nuevo usuario
  { path: 'editar-usuario/:id', component: EditarUsuarioComponent, canActivate: [AdminGuard]}, // Editar usuario
  { path: 'ver-usuario', component: VerperfilComponent, canActivate: [AdminGuard]},//Ver mi perfil
  { path: 'ver-egresos', component: VeregresosComponent, canActivate: [AdminGuard]},//Ver egresos
  { path: 'registrar-egreso', component: AgregaregresoComponent, canActivate: [AdminGuard]},//Agregar egreso
  { path: 'editar-egreso/:id', component: EditarEgresoComponent, canActivate: [AdminGuard]},//Agregar egreso
  { path: 'agregar-egreso', component: AgregaregresoComponent, canActivate: [AdminGuard]},//Agregar egreso
  { path: 'ver-unidad', component: VerunidadesdenegocioComponent, canActivate: [AdminGuard]},//Ver unidad de negocio
  { path: 'editar-unidad/:id', component: EditarUnidadesdenegocioComponent, canActivate: [AdminGuard]},//Editar unidad de negocio
  { path: 'agregar-unidad', component: AgregarUnidadesdenegocioComponent, canActivate: [AdminGuard]},//Agregar unidad de negocio
  { path: 'ver-empresas', component: VerempresasComponent, canActivate: [AdminGuard] },//Ver empresas
  { path: 'editar-empresa/:id', component: EditarEmpresaComponent, canActivate: [AdminGuard]},//Editar empresas
  { path: 'agregar-empresa', component: AgregarEmpresaComponent, canActivate: [AdminGuard]},//Editar empresas
  { path: 'ver-tipodeegreso', component: VertipodeegresoComponent, canActivate: [AdminGuard]},//Ver tipo de egreso
  { path: 'agregar-tipo', component: AgregarTipodeegresoComponent, canActivate: [AdminGuard]},//Agregar tipo de egreso
  { path: 'editar-tipo/:id', component: EditarTipodeegresoComponent, canActivate: [AdminGuard]},//Editar tipo de egreso
  { path: 'ver-origen', component: VerOrigenComponent, canActivate: [AdminGuard]},//Ver origen egreso
  { path: 'agregar-origen', component: AgregarOrigendeegresoComponent, canActivate: [AdminGuard]},//Agregar origen egreso
  { path: 'editar-origen/:id', component: EditarOrigendeegresoComponent, canActivate: [AdminGuard]},//Editar origen egreso
  { path: 'ver-productosyservicios', component: VerProductosyserviciosComponent, canActivate: [AdminGuard]},//Ver productos y servicios
  { path: 'editar-productosyservicios/:id', component: EditarProductosyserviciosComponent, canActivate: [AdminGuard]},//Editar productos y servicios
  { path: 'agregar-productosyservicios', component: AgregarProductosyserviciosComponent, canActivate: [AdminGuard]},//Agregar productos y servicios
  { path: 'ver-papelera', component: VerPapeleraComponent, canActivate: [AdminGuard]},//Ver papelera ingresos
  { path: 'ver-papelera-egresos', component: VerPapeleraegresosComponent, canActivate: [AdminGuard]},//Ver papelera egresos
//Rutas gerente
  { path: 'home-gerente', component: HomegerenteComponent},//Pagina principal gerente
  { path: 'ver-egresosgerente', component: VerEgresogerenteComponent},//Ver egresos gerente
  { path: 'nuevo-egresogerente', component: NuevoEgresogerenteComponent},//Nuevo egreso gerente
  { path: 'ver-usuariogerente', component: VerPerfilgerenteComponent},//Ver perfil gerente
//Rutas Finanzas
  { path: 'home-finanzas', component: HomeFinanzasComponent },//Pagina principal finanzas
  { path: 'ver-egresosfinanzas', component: VerEgresosfinanzasComponent},//Ver egresos finanzas
  { path: 'nuevo-egresofinanzas', component: NuevoEgresofinanzasComponent},//Nuevo egreso finanzas
  { path: 'ver-usuariofinanzas', component: VerPerfilfinanzasComponent},//Ver perfil finanzas
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
