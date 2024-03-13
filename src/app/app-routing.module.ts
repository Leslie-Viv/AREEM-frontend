import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaprincipalComponent } from './administrador/paginaprincipal/paginaprincipal.component';
import { LoginComponent } from './login/login.component';
import { IngresosComponent } from './administrador/ingresos/ingresos.component';
import { NuevosusuariosComponent } from './administrador/nuevosusuarios/nuevosusuarios.component';
import { NuevoUsuarioComponent } from './administrador/nuevo-usuario/nuevo-usuario.component';
import { NuevoIngresoComponent } from './administrador/nuevo-ingreso/nuevo-ingreso.component';

const routes: Routes = [
  // Otras rutas existentes
  { path: 'inicio-admin', component: PaginaprincipalComponent }, // Nueva ruta
  { path: '', component: LoginComponent, pathMatch: 'full' }, // Nueva ruta
  { path: 'ingresos-admin', component: IngresosComponent }, // Ver ingresos
  { path: 'nuevo-ingreso', component: NuevoIngresoComponent }, // Ver ingresos
  { path: 'nuevos-usuarios', component: NuevosusuariosComponent }, // Verusuarios
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent}, // Agregar nuevo usuario
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
