import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeloentregaComponent } from './features/modeloentrega/modeloentrega/modeloentrega.component';
import { CrearmodeloentregaComponent } from './features/modeloentrega/crearmodeloentrega/crearmodeloentrega.component';
import { EditarmodeloentregaComponent } from './features/modeloentrega/editarmodeloentrega/editarmodeloentrega.component';
import { InicioComponent } from './features/inicio/inicio.component';
import { NavgeacionComponent } from './features/navgeacion/navgeacion.component';
import { HttpClientModule } from '@angular/common/http';
import { ProveedorComponent } from './features/proveedor/proveedor/proveedor.component';
import { CrearproveedorComponent } from './features/proveedor/crearproveedor/crearproveedor.component';
import { EditarproveedorComponent } from './features/proveedor/editarproveedor/editarproveedor.component';
import { CrearrecursoencabezadoComponent } from './features/recurso-encabezado/crearrecursoencabezado/crearrecursoencabezado.component';
import { EditarrecursoencabezadoComponent } from './features/recurso-encabezado/editarrecursoencabezado/editarrecursoencabezado.component';
import { RecursoencabezadoComponent } from './features/recurso-encabezado/recursoencabezado/recursoencabezado.component';
import { RecursodetalleComponent } from './features/recursodetalle/recursodetalle/recursodetalle.component';
import { EditarrecursodetalleComponent } from './features/recursodetalle/editarrecursodetalle/editarrecursodetalle.component';
import { CrearrecursodetalleComponent } from './features/recursodetalle/crearrecursodetalle/crearrecursodetalle.component';
import { CapacidadComponent } from './features/capacidad/capacidad/capacidad.component';
import { CrearcapacidadComponent } from './features/capacidad/crearcapacidad/crearcapacidad.component';
import { EditarcapacidadComponent } from './features/capacidad/editarcapacidad/editarcapacidad.component';
import { LoginComponent } from './features/login/login.component';
import { NavigationDevComponent } from './features/navigation-dev/navigation-dev.component';
import { NavigationClientComponent } from './features/navigation-client/navigation-client.component';
import { EditarcatalogotecnicoComponent } from './features/catalogotecnico/editarcatalogotecnico/editarcatalogotecnico.component';
import { CrearcatalogotecnicoComponent } from './features/catalogotecnico/crearcatalogotecnico/crearcatalogotecnico.component';
import { CatalogotecnicoComponent } from './features/catalogotecnico/catalogotecnico/catalogotecnico.component';
import { ProyectoComponent } from './features/proyecto/proyecto/proyecto.component';
import { CrearproyectoComponent } from './features/proyecto/crearproyecto/crearproyecto.component';
import { EditarproyectoComponent } from './features/proyecto/editarproyecto/editarproyecto.component';
import { UsuarioComponent } from './features/usuario/usuario/usuario.component';
import { CrearusuarioComponent } from './features/usuario/crearusuario/crearusuario.component';
import { EditarusuarioComponent } from './features/usuario/editarusuario/editarusuario.component';
import { IncidenteComponent } from './features/incidente/incidente/incidente.component';
import { CrearincidenteComponent } from './features/incidente/crearincidente/crearincidente.component';
import { EditarincidenteComponent } from './features/incidente/editarincidente/editarincidente.component';
import { CatalogoclienteComponent } from './features/catalogocliente/catalogocliente/catalogocliente.component';
import { CrearcatalogoclienteComponent } from './features/catalogocliente/crearcatalogocliente/crearcatalogocliente.component';
import { EditarcatalogoclienteComponent } from './features/catalogocliente/editarcatalogocliente/editarcatalogocliente.component';
import { PruebasComponent } from './features/pruebas/pruebas/pruebas.component';
import { CrearpruebasComponent } from './features/pruebas/crearpruebas/crearpruebas.component';
import { EditarpruebasComponent } from './features/pruebas/editarpruebas/editarpruebas.component';
import { RecursocambioComponent } from './features/recursocambio/recursocambio/recursocambio.component';
import { CrearrecursocambioComponent } from './features/recursocambio/crearrecursocambio/crearrecursocambio.component';
import { EditarrecursocambioComponent } from './features/recursocambio/editarrecursocambio/editarrecursocambio.component';
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
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DashboardDevComponent } from './features/dashboard-dev/dashboard-dev.component';
import { DashboardClientComponent } from './features/dashboard-client/dashboard-client.component';

@NgModule({
  declarations: [
    AppComponent,
    ModeloentregaComponent,
    CrearmodeloentregaComponent,
    EditarmodeloentregaComponent,
    InicioComponent,
    NavgeacionComponent,
    ProveedorComponent,
    CrearproveedorComponent,
    EditarproveedorComponent,
    CrearrecursoencabezadoComponent,
    EditarrecursoencabezadoComponent,
    RecursoencabezadoComponent,
    RecursodetalleComponent,
    EditarrecursodetalleComponent,
    CrearrecursodetalleComponent,
    CapacidadComponent,
    CrearcapacidadComponent,
    EditarcapacidadComponent,
    LoginComponent,
    NavigationDevComponent,
    NavigationClientComponent,
    EditarcatalogotecnicoComponent,
    CrearcatalogotecnicoComponent,
    CatalogotecnicoComponent,
    ProyectoComponent,
    CrearproyectoComponent,
    EditarproyectoComponent,
    UsuarioComponent,
    CrearusuarioComponent,
    EditarusuarioComponent,
    IncidenteComponent,
    CrearincidenteComponent,
    EditarincidenteComponent,
    CatalogoclienteComponent,
    CrearcatalogoclienteComponent,
    EditarcatalogoclienteComponent,
    PruebasComponent,
    CrearpruebasComponent,
    EditarpruebasComponent,
    RecursocambioComponent,
    CrearrecursocambioComponent,
    EditarrecursocambioComponent,
    CambiosComponent,
    CrearcambiosComponent,
    EditarcambiosComponent,
    RiesgoComponent,
    CrearriesgoComponent,
    EditarriesgoComponent,
    CambioriesgosComponent,
    CrearcambioriesgosComponent,
    EditarcambioriesgosComponent,
    RequerimientoComponent,
    CrearrequerimientoComponent,
    EditarrequerimientoComponent,
    DashboardComponent,
    DashboardDevComponent,
    DashboardClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
