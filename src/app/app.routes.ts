import { Routes } from '@angular/router';
import { FiveInSquare } from '../pages/five-in-square/five-in-square';

export const routes: Routes = [
  {
    path: 'five-in-square',
    loadComponent: () => import('../pages/five-in-square/five-in-square').then(m => m.FiveInSquare),
  },
  {
    path: '**',
    redirectTo: 'five-in-square',
    pathMatch: 'full'
  }
];
