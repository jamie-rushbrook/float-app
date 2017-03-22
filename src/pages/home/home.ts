import {Component, Inject} from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, @Inject('api') private api) {
  }

  ionViewDidEnter(){
    //console.log(this.api.People());
    this.api.People();
  }
}
