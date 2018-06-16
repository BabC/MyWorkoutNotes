import {NgModule} from '@angular/core';
import {ExerciseCardComponent} from './exercise-card/exercise-card';
import {IonicModule} from "ionic-angular";
import { TrainingCardComponent } from './training-card/training-card';
import { TimerComponent } from './timer/timer';

@NgModule({
  declarations: [ExerciseCardComponent,
    TrainingCardComponent,
    TimerComponent],
  imports: [IonicModule],
  exports: [ExerciseCardComponent,
    TrainingCardComponent,
    TimerComponent]
})
export class ComponentsModule {
}
