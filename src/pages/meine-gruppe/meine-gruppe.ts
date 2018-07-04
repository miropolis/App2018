import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MeineGruppePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meine-gruppe',
  templateUrl: 'meine-gruppe.html',
})
export class MeineGruppePage {
GruppeNummer;
Gruppe1;
Gruppe2;
Gruppe3;
Gruppe4;
Gruppe5;


  constructor(public navCtrl: NavController, private storage: Storage, public navParams: NavParams) {
    this.storage.get('group').then((val) => {
      for(var i=1; i<=5; i++) {
        let elemAk = document.getElementById("g"+i);
        if(i != val) {
          elemAk.style.display = "none";  }
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeineGruppePage');
    /*let element = document.getElementById("g1");
    element.style.display = "none";*/
  }



  displayGroup(){
    console.log('Gruppen Nummer:', this.GruppeNummer);
  }

}
