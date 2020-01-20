import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateComponent } from './pages/update/update.component';
   

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'detalle',component: DetalleComponent},
  {path: 'update',component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
