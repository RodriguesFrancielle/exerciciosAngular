import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AutenticacaoComponent } from './app-autenticacao/AutenticacaoComponent';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { Error404Component } from './pages/error404/error404.component';
import { AuthGuard } from './services/Auth/auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]}, 
  {path: 'login', component: AutenticacaoComponent},
  {path: 'contato', component: ContatoComponent},
  {path: '**', component: Error404Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
