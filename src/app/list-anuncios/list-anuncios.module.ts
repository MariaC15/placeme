import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListAnunciosPageRoutingModule } from './list-anuncios-routing.module';

import { ListAnunciosPage } from './list-anuncios.page';
import { MasonryGalleryModule } from 'ngx-masonry-gallery';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListAnunciosPageRoutingModule,
    MasonryGalleryModule
  ],
  declarations: [ListAnunciosPage]
})
export class ListAnunciosPageModule {}
