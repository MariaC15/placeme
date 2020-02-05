import { NavController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IMasonryGalleryImage } from 'ngx-masonry-gallery';
@Component({
  selector: 'app-list-anuncios',
  templateUrl: './list-anuncios.page.html',
  styleUrls: ['./list-anuncios.page.scss'],
})
export class ListAnunciosPage implements OnInit {
  public imageUrlArray=[];
  constructor(public navCtrl:NavController) { }

  ngOnInit() {
    this.imageUrlArray = [
      {img:'../../assets/img/girl-1.jpg',text:'sdsdsd'},
      {img:'../../assets/img/girl-2.jpg',text:'sdsdsd'},
      {img:'../../assets/img/girl-3.jpg',text:'sdsdsd'},
      {img:'../../assets/img/girl-3.jpg',text:'sdsdsd'},
      {img:'../../assets/img/girl-2.jpg',text:'sdsdsd'},
      {img:'../../assets/img/girl-3.jpg',text:'sdsdsd'},
    ]
  }
  verAnuncio(){
    this.navCtrl.navigateForward('/perfil-anuncio');
  }
}
