import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './common/components/forgot-password/forgot-password.component';
import { NotFoundComponent } from './common/components/not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'login',
    pathMatch: 'full'
  },
  {path: 'Admin', loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)},
  {path : 'login' , component : LoginComponent},
  {path : 'register' , component : UserRegistrationComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'User', loadChildren:() => import('./user/user.module').then(m => m.UserModule)},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
