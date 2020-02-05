import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var google;
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  private map= null;
  constructor() { }

  loadMap(){
    let mapOptions = {
      center: {lat: 47.490, lng: -117.585},
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    let mapEle: HTMLElement = document.getElementById('map');
    this.map = new google.maps.Map(mapEle,{
      center:{lat: 47.490, lng: -117.585},
      zoom: 19,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false

    });
    new google.maps.event.addListenerOnce(this.map,'idle',() =>{
      let marker = new google.maps.Marker({
        position: {lat: 47.490, lng: -117.585},
        map:this.map,
        title:'Hello world'
      });
      mapEle.classList.add('show-map');
    });
  }
  ngOnInit() {
    this.loadMap();
  }

}
