import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExercisesListPage } from './exercises-list';

@NgModule({
  declarations: [
    ExercisesListPage,
  ],
  imports: [
    IonicPageModule.forChild(ExercisesListPage),
  ],
})
export class ExercisesPageModule {}
