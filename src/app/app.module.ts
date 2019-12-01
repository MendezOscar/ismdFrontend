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
