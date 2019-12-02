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
import { CatalogotecnicoComponent } from './features/catalogotecnico/catalogotecnico/catalogotecnico.component';
import { CrearcatalogotecnicoComponent } from './features/catalogotecnico/crearcatalogotecnico/crearcatalogotecnico.component';
import { EditarcatalogotecnicoComponent } from './features/catalogotecnico/editarcatalogotecnico/editarcatalogotecnico.component';
import { ProyectoComponent } from './features/proyecto/proyecto/proyecto.component';
import { CrearproyectoComponent } from './features/proyecto/crearproyecto/crearproyecto.component';
import { EditarproyectoComponent } from './features/proyecto/editarproyecto/editarproyecto.component';
import { IncidenteComponent } from './features/incidente/incidente/incidente.component';
import { CrearincidenteComponent } from './features/incidente/crearincidente/crearincidente.component';
import { EditarincidenteComponent } from './features/incidente/editarincidente/editarincidente.component';
import { CatalogoclienteComponent } from './features/catalogocliente/catalogocliente/catalogocliente.component';
import { CrearcatalogoclienteComponent } from './features/catalogocliente/crearcatalogocliente/crearcatalogocliente.component';
import { EditarcatalogoclienteComponent } from './features/catalogocliente/editarcatalogocliente/editarcatalogocliente.component';
import { UsuarioComponent } from './features/usuario/usuario/usuario.component';
import { CrearusuarioComponent } from './features/usuario/crearusuario/crearusuario.component';
import { EditarusuarioComponent } from './features/usuario/editarusuario/editarusuario.component';
import { Pruebas } from './models/Pruebas';
import { PruebasComponent } from './features/pruebas/pruebas/pruebas.component';
import { CrearpruebasComponent } from './features/pruebas/crearpruebas/crearpruebas.component';
import { EditarpruebasComponent } from './features/pruebas/editarpruebas/editarpruebas.component';
import { RecursocambioComponent } from './features/recursocambio/recursocambio/recursocambio.component';
import { CrearrecursocambioComponent } from './features/recursocambio/crearrecursocambio/crearrecursocambio.component';
import { EditarrecursocambioComponent } from './features/recursocambio/editarrecursocambio/editarrecursocambio.component';


const routes: Routes = [
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
  {path: 'editarcapacidad/:id', component: EditarcapacidadComponent},
  {path: 'catalogotecnico', component: CatalogotecnicoComponent},
  {path: 'crearcatalogotecnico', component: CrearcatalogotecnicoComponent},
  {path: 'editarcatalogotecnico/:id', component: EditarcatalogotecnicoComponent},
  {path: 'proyecto', component: ProyectoComponent},
  {path: 'crearproyecto', component: CrearproyectoComponent},
  {path: 'editarproyecto/:id', component: EditarproyectoComponent},
  {path: 'incidente', component: IncidenteComponent},
  {path: 'crearincidente', component: CrearincidenteComponent},
  {path: 'editarincidente/:id', component: EditarincidenteComponent},
  {path: 'catalogocliente', component: CatalogoclienteComponent},
  {path: 'crearcatalogocliente', component: CrearcatalogoclienteComponent},
  {path: 'editarcatalogocliente', component: EditarcatalogoclienteComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'crearusuario', component: CrearusuarioComponent},
  {path: 'editarusuario', component: EditarusuarioComponent},
  {path: 'pruebas', component: PruebasComponent},
  {path: 'crearpruebas', component: CrearpruebasComponent},
  {path: 'editarpruebas/:id', component: EditarpruebasComponent},
  {path: 'recursocambio', component: RecursocambioComponent},
  {path: 'crearrecursocambio', component: CrearrecursocambioComponent},
  {path: 'editarrecursocambio/:id', component: EditarrecursocambioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
