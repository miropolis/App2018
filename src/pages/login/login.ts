import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private storage: Storage, public navParams: NavParams) {
  }

  pw1=""
  login() {
    console.log(this.pw1);
    switch(this.pw1) { 
      case "Hallo": { 
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 1);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
         break; 
      } 
      case "Nerd": { 
        this.storage.set("isLoggedIn", true);
        this.storage.set("group", 2);
        this.navCtrl.push('TabsPage');
        this.navCtrl.setRoot('TabsPage');
         break; 
      } 
      default: { 
         this.presentAlert();
         break; 
      } 
   } 
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Falsches Passwort',
      message: "<p>Deine Eingabe:</p> " + this.pw1,
      buttons: ['Verstanden']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
