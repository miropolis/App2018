import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZeitplanPage } from './zeitplan';

@NgModule({
  declarations: [
    ZeitplanPage,
  ],
  imports: [
    IonicPageModule.forChild(ZeitplanPage),
  ],
})
export class ZeitplanPageModule {}
