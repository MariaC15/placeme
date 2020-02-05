import { RegistroPage } from './../registro/registro.page';
import { Component} from '@angular/core';
import { ModalController, AlertController,LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading:any;
  constructor(private router: Router, private modalController: ModalController, private alertController: AlertController,
    private loadingController: LoadingController, private navCtrl:NavController) {}

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Iniciando Sesión, por favor espere ...',
      duration: 2000,
      spinner: 'bubbles'
    });
    await this.loading.present();
    // await this.iniciar_sesion();
  }
  async iniciar_sesion(){
    this.presentLoading();
    setTimeout(async() => {
      // this.loading.onDidDismiss();
      const alert = await this.alertController.create({
        header: 'Información',
        message: 'Placeme debe ser usada solo apra mayores de 18 años.',
        buttons: [{
          text:'OK',
          handler:()=>{
            this.navCtrl.navigateForward('/inicio');
          }
        }]
      });
      await alert.present();
    }, 2000);
  }
  async go_register(){
    const modal = await this.modalController.create({
      component: RegistroPage
    });
    return await modal.present();
    // this.router.nsavigate(['/registro'])
  }
}
