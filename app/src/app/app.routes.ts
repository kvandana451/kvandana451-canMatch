import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AdminComponent } from '../admin/admin.component';
import { HomeComponent } from '../home/home.component';
import { canMatchGuard } from '../can-match.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canMatch: [canMatchGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
