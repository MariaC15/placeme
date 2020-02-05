import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TextoLegalPage } from './texto-legal.page';

const routes: Routes = [
  {
    path: '',
    component: TextoLegalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TextoLegalPageRoutingModule {}
