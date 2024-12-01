import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CorsiComponent } from 'corsi';
//import {CorsiComponent} from '../app/corsi/corsi.component'

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'corsi', component: CorsiComponent}
  ];
