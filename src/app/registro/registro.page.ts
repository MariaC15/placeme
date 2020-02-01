import { ModalController,AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(private modalController: ModalController,private alertController: AlertController) { }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  async enviar() {
    const alert = await this.alertController.create({
      header: 'Información',
      subHeader: 'Email enviado',
      message: 'En breve recibiras el email de validación. Por si acaso, revisa la carpeta Spam. Si no lo recibes pasado unos minutos contactanos.',
      buttons: ['OK']
    });

    await alert.present();
  }
  ngOnInit() {
  }

}
