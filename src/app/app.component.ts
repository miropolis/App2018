import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any

  constructor(platform: Platform, storage: Storage, statusBar: StatusBar, splashScreen: SplashScreen) {
    storage.get("isLoggedIn").then((status) => {
      console.log("component logged in?", status)
      if(status) {
        this.goToTabsPage()
      } else{
        this.goToLoginPage()
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

 goToTabsPage ( ) {
    this.rootPage = "TabsPage"
  }
  goToLoginPage() {
    this.rootPage = "LoginPage"
  }
}

