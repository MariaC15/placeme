import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilAnuncioPageRoutingModule } from './perfil-anuncio-routing.module';

import { PerfilAnuncioPage } from './perfil-anuncio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAnuncioPageRoutingModule
  ],
  declarations: [PerfilAnuncioPage]
})
export class PerfilAnuncioPageModule {}
