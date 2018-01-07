import {Injectable} from '@angular/core';
import {DataType} from '../../models/data-type-enum';
import {Storage} from '@ionic/storage';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {

  }

  getData(dataType: DataType) {
    return this.storage.get(dataType.toString());
  }

  saveData(dataType: DataType, data: any) {
    this.storage.set(dataType.toString(), data);
  }

}
