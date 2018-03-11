import {Injectable} from '@angular/core';
import {DataType} from '../../models/data-type-enum';
import {Storage} from '@ionic/storage';
import {Exercise} from "../../models/exercise";
import {Session} from "../../models/session";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {

  }

  /**
   * Retrieve data in storage
   * @param {DataType} dataType
   * @returns {Promise<any>}
   */
  getData(dataType: DataType) {
    return this.storage.get(dataType.toString());
  }

  /**
   * Save the data in storage
   * @param {DataType} dataType
   * @param data
   */
  saveData(dataType: DataType, data: any) {
    this.storage.set(dataType.toString(), data);
  }

  /**
   * Remove an exercise from all sessions in storage
   * @param {Exercise} exercise
   */
  removeExerciseFromSessions(exercise: Exercise) {
    this.getData(DataType.SESSION).then((sessions: Session[]) => {
      sessions.forEach((s: Session) => {
        s.exercises = s.exercises.filter((e: Exercise) => e.name !== exercise.name);
      });
      this.saveData(DataType.SESSION, sessions);
    });
  }

  /**
   * Edit an exercise from all sessions in storage
   * @param {Exercise} exercise
   */
  editExerciseFromSessions(exerciseOld: Exercise, exerciseNew: Exercise) {
    this.getData(DataType.SESSION).then((sessions: Session[]) => {
      sessions.forEach((s: Session) => {
        s.exercises.forEach((e: Exercise) => {
          if (e.name === exerciseOld.name) {
            e.name = exerciseNew.name;
          }
        })
      });
      this.saveData(DataType.SESSION, sessions);
    });
  }
}
