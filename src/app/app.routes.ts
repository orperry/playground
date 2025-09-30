import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'five-in-square',
    loadComponent: () => import('../pages/five-in-square/five-in-square.component').then(c => c.FiveInSquareComponent),
  },
  {
    path: '**',
    redirectTo: 'five-in-square',
    pathMatch: 'full'
  }
];
