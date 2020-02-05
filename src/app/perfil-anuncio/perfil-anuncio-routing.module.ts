import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilAnuncioPage } from './perfil-anuncio.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilAnuncioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilAnuncioPageRoutingModule {}
