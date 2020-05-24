import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosPage } from './servicios.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosPage
    
  },
  {
    path: 'contenido1',
    loadChildren: () => import('./contenido1/contenido1.module').then( m => m.Contenido1PageModule)
  },
  {
    path: 'contenido2',
    loadChildren: () => import('./contenido2/contenido2.module').then( m => m.Contenido2PageModule)
  },
  {
    path: 'contenido3',
    loadChildren: () => import('./contenido3/contenido3.module').then( m => m.Contenido3PageModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosPageRoutingModule {}
