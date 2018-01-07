import {Injectable} from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {

  }

  getData() {
    return this.storage.get('sessions');
  }

  save(data) {
    this.storage.set('sessions', data);
  }

}
