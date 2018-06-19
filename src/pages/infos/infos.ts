import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gobacktoLoginPage() {
    this.navCtrl.push('LoginPage');
    this.navCtrl.setRoot('LoginPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfosPage');
  }

}
