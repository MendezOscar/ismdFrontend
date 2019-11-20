import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModeloentregaComponent } from './features/modeloentrega/modeloentrega/modeloentrega.component';
import { CrearmodeloentregaComponent } from './features/modeloentrega/crearmodeloentrega/crearmodeloentrega.component';
import { EditarmodeloentregaComponent } from './features/modeloentrega/editarmodeloentrega/editarmodeloentrega.component';
import { InicioComponent } from './features/inicio/inicio.component';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'modeloentrega', component: ModeloentregaComponent},
  {path: 'crearmodeloentrega', component: CrearmodeloentregaComponent},
  {path: 'editarmodeloentrega/:id', component: EditarmodeloentregaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
