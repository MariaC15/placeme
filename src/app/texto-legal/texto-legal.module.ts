import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TextoLegalPageRoutingModule } from './texto-legal-routing.module';

import { TextoLegalPage } from './texto-legal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TextoLegalPageRoutingModule
  ],
  declarations: [TextoLegalPage]
})
export class TextoLegalPageModule {}
