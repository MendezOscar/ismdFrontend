import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModeloentregaComponent } from './features/modeloentrega/modeloentrega/modeloentrega.component';
import { CrearmodeloentregaComponent } from './features/modeloentrega/crearmodeloentrega/crearmodeloentrega.component';
import { EditarmodeloentregaComponent } from './features/modeloentrega/editarmodeloentrega/editarmodeloentrega.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { ProveedorComponent } from './features/proveedor/proveedor/proveedor.component';
import { CrearproveedorComponent } from './features/proveedor/crearproveedor/crearproveedor.component';
import { EditarproveedorComponent } from './features/proveedor/editarproveedor/editarproveedor.component';
import { CrearrecursoencabezadoComponent } from './features/recurso-encabezado/crearrecursoencabezado/crearrecursoencabezado.component';
import { EditarrecursoencabezadoComponent } from './features/recurso-encabezado/editarrecursoencabezado/editarrecursoencabezado.component';
import { RecursoencabezadoComponent } from './features/recurso-encabezado/recursoencabezado/recursoencabezado.component';
import { RecursodetalleComponent } from './features/recursodetalle/recursodetalle/recursodetalle.component';
import { CrearrecursodetalleComponent } from './features/recursodetalle/crearrecursodetalle/crearrecursodetalle.component';
import { EditarrecursodetalleComponent } from './features/recursodetalle/editarrecursodetalle/editarrecursodetalle.component';
import { CapacidadComponent } from './features/capacidad/capacidad/capacidad.component';
import { CrearcapacidadComponent } from './features/capacidad/crearcapacidad/crearcapacidad.component';
import { EditarcapacidadComponent } from './features/capacidad/editarcapacidad/editarcapacidad.component';
import { LoginComponent } from './features/login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'modeloentrega', component: ModeloentregaComponent},
  {path: 'crearmodeloentrega', component: CrearmodeloentregaComponent},
  {path: 'editarmodeloentrega/:id', component: EditarmodeloentregaComponent},
  {path: 'proveedor', component: ProveedorComponent},
  {path: 'crearproveedor', component: CrearproveedorComponent},
  {path: 'editarproveedor/:id', component: EditarproveedorComponent},
  {path: 'recursoencabezado', component: RecursoencabezadoComponent},
  {path: 'crearrecursoencabezado', component: CrearrecursoencabezadoComponent},
  {path: 'editarrecursoencabezado/:id', component: EditarrecursoencabezadoComponent},
  {path: 'recursodetalle', component: RecursodetalleComponent },
  {path: 'crearrecursodetalle', component: CrearrecursodetalleComponent},
  {path: 'editarrecursodetalle/:id', component: EditarrecursodetalleComponent},
  {path: 'capacidad', component: CapacidadComponent},
  {path: 'crearcapacidad', component: CrearcapacidadComponent},
  {path: 'editarcapacidad/:id', component: EditarcapacidadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
