import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAnunciosPage } from './list-anuncios.page';

const routes: Routes = [
  {
    path: '',
    component: ListAnunciosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAnunciosPageRoutingModule {}
