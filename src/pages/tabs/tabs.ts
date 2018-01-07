import {Component} from '@angular/core';
import {SessionsListPage} from '../sessions-list/sessions-list';
import {TimerPage} from '../timer/timer';
import {ExercisesPage} from '../exercises/exercises';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SessionsListPage;
  tab2Root = ExercisesPage;
  tab3Root = TimerPage;

  constructor() {

  }
}
