import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


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

  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
  }

  setisLoggedInToFalse() {
    this.storage.set("isLoggedIn", false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfosPage');
  }

}
