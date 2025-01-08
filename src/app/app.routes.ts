import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CorsiComponent } from 'corsi';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'corsi', component: CorsiComponent, canActivate: [authGuard]}
  ];
 