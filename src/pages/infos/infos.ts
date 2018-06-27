import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';


/**
 * Generated class for the InfosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html',
})
export class InfosPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private storage: Storage, public navParams: NavParams) {
  }

  logoutAlert() {
    let alert = this.alertCtrl.create({
      title: 'Möchtest du dich wirklich abmelden?',
      buttons: [
        {
          text: 'Nein',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ja',
          handler: () => {
            console.log('Abmelden getriggert');
            this.storage.set("isLoggedIn", false);
            this.storage.set("group", 0);
            this.successfullogoutAlert();
          }
        }
      ]
    });
    alert.present();
  }

  successfullogoutAlert() {
    let alert = this.alertCtrl.create({
      title: 'Du hast dich erfolgreich abgemeldet',
      subTitle: 'Bitte starte die App neu, um dich erneut einzuloggen',
      enableBackdropDismiss: false,
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfosPage');
  }

}
