import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './registration/components/login/login.component';
import {DashboardComponent} from './dashboard/components/dashboard/dashboard.component';
import {PageNotFoundModule} from './page-not-found/page-not-found.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './registration/registration.module#RegistrationModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: '',
    redirectTo: 'registration',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
