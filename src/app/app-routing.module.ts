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
import { CambiosComponent } from './features/cambios/cambios/cambios.component';
import { CrearcambiosComponent } from './features/cambios/crearcambios/crearcambios.component';
import { EditarcambiosComponent } from './features/cambios/editarcambios/editarcambios.component';
import { RiesgoComponent } from './features/riesgo/riesgo/riesgo.component';
import { CrearriesgoComponent } from './features/riesgo/crearriesgo/crearriesgo.component';
import { EditarriesgoComponent } from './features/riesgo/editarriesgo/editarriesgo.component';
import { CambioriesgosComponent } from './features/cambioriesgos/cambioriesgos/cambioriesgos.component';
import { CrearcambioriesgosComponent } from './features/cambioriesgos/crearcambioriesgos/crearcambioriesgos.component';
import { EditarcambioriesgosComponent } from './features/cambioriesgos/editarcambioriesgos/editarcambioriesgos.component';
import { RequerimientoComponent } from './features/requerimiento/requerimiento/requerimiento.component';
import { CrearrequerimientoComponent } from './features/requerimiento/crearrequerimiento/crearrequerimiento.component';
import { EditarrequerimientoComponent } from './features/requerimiento/editarrequerimiento/editarrequerimiento.component';


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
  {path: 'cambios', component: CambiosComponent},
  {path: 'crearcambios', component: CrearcambiosComponent},
  {path: 'editarcambios/:id', component: EditarcambiosComponent},
  {path: 'riesgo', component: RiesgoComponent},
  {path: 'crearriesgo', component: CrearriesgoComponent},
  {path: 'editarriesgo/:id', component: EditarriesgoComponent},
  {path: 'cambioriesgos', component: CambioriesgosComponent},
  {path: 'crearcambioriesgos', component: CrearcambioriesgosComponent},
  {path: 'editarcambioriesgos/:id', component: EditarcambioriesgosComponent},
  {path: 'requerimiento', component: RequerimientoComponent},
  {path: 'crearrequerimiento', component: CrearrequerimientoComponent},
  {path: 'editarrequerimiento/:id', component: EditarrequerimientoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
