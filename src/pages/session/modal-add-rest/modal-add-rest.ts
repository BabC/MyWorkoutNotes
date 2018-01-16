import {Component} from '@angular/core';
import {ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalAddRestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modal-add-rest',
  templateUrl: 'modal-add-rest.html',
})
export class ModalAddRestPage {

  public restTime: string = '00:00';

  constructor(private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  validateRest() {
    this.viewCtrl.dismiss(this.restTime);
  }
}
