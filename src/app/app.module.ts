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

@NgModule({
  declarations: [
    AppComponent,
    ModeloentregaComponent,
    CrearmodeloentregaComponent,
    EditarmodeloentregaComponent,
    InicioComponent,
    NavgeacionComponent
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
