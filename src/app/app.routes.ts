import { Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { RouteNames } from './shared/consts/route-names.enum';
import { authRoutes } from './auth/auth.routes';

export const appRoutes: Routes = [
  {
    path: '',
    component: ErrorComponent,
    pathMatch: 'full',
  },
  {
    path: RouteNames.AUTH,
    children: authRoutes,
  },
  {
    path: '**',
    redirectTo: '',
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
