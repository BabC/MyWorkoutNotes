import {NgModule} from '@angular/core';
import {ExerciseCardComponent} from './exercise-card/exercise-card';
import {IonicModule} from "ionic-angular";

@NgModule({
  declarations: [ExerciseCardComponent],
  imports: [IonicModule],
  exports: [ExerciseCardComponent]
})
export class ComponentsModule {
}
